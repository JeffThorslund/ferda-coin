import Color from "color";

export const colors = {
  LIGHT: "#dddddd",
  DARK: "#222831",
  PRIMARY: "#f05454",
  SECONDARY: "#30475e",
};

export const spacing = {
  GUTTER: 40,
};

//Construct Colors

Object.keys(colors).map((key) => {
  colors[key] = Color(colors[key]);
  return null
});
