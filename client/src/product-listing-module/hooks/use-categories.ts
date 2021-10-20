import { useEffect, useState } from "react";
import { Category } from "../types";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", "/graphql");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(
      JSON.stringify({
        query: `{
        categories(ids: "156126", locale: de_DE) {
          name
          articleCount
          childrenCategories {
            name
            urlPath
          }
          categoryArticles(first: 50) {
            articles {
              name
              variantName
              prices {
                currency
                regular {
                  value
                }
              }
              images(
                format: WEBP
                maxWidth: 200
                maxHeight: 200
                limit: 1
              ) {
                path
              }
            }
          }
        }
      }`,
      })
    );

    xhr.onload = () => {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.response);

        setCategories(response.data.categories);
      }
    };
  }, []);

  return categories;
}
