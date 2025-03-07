import React, { useEffect, useState } from "react";
import "../src/App.css";
import LoadingState from "./LoadingState";

const ACCESS_KEY = "6GvXoTl-2xsEXxOv7FCnEIHf5dDHpZMjRSwx0wV0fW4";
const URL = "https://api.unsplash.com/photos/";
const URL2 = "https://api.unsplash.com/search/photos";

export default function Home({ query, setSearchResult, searchResult }) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
        // setIsLoading(true);
      try {
        const res = await fetch(`${URL}?client_id=${ACCESS_KEY}`);
        const data = await res.json();
        console.log(data);
        setImages(data);
        setIsLoading(true)
      } catch (error) {
        console.log(error);
      }
    };
    fetchImage();
  }, []);

  useEffect(() => {

    if (!query) return;

    const searchImage = async () => {
        // setIsLoading(true);
      try {
        const res = await fetch(
          `${URL2}?client_id=${ACCESS_KEY}&page=1&query=${query}`
        );
        const data = await res.json();
        console.log(data.results);
        setSearchResult(data.results);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    searchImage();
  }, [query]);
  return (
    <div>
      {!isLoading ? (
        <LoadingState />
      ) : (
        <div>
          {query ? (
            <div className="grid">
              {searchResult.map((search) => (
                <a key={search.id} href={search.links.download}>
                  <div className="image" >
                    <img
                      className="image"
                      src={search.urls.regular}
                      alt=""
                    />
                    <div className="description">
                      <p>{search.alt_description}</p>
                      {/* <a href={image.links.download}><button> Download</button></a> */}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="grid">
              {images.map((image) => (
                <a key={image.id} href={image.links.download}>
                  <div className="image" >
                    <img className="image" src={image.urls.regular} alt="" />
                    <div className="description">
                      <p>{image.alt_description}</p>
                      {/* <a href={image.links.download}><button> Download</button></a> */}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
