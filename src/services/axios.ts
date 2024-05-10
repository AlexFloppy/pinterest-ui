import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4N2UxZDM4LTVlOWQtNGJiOS1iZWU2LWY5Mjk0YjczMDUwMSIsImVtYWlsIjoiZ2VuYWRpeUBleGFtcGxlLmNvbSIsInBhc3N3b3JkIjoiR2VuYWRpeSIsIm5hbWUiOiJHZW5hZGl5IiwiYXZhdGFyIjpudWxsLCJjcmVhdGVkQXQiOiIyMDI0LTAzLTMwVDE0OjI3OjQwLjYwNloiLCJ1cGRhdGVkQXQiOiIyMDI0LTAzLTMwVDE0OjI3OjQwLjYwNloiLCJpYXQiOjE3MTE4MDk0ODl9.wo8gbG4uijE6t63w440xT5GtjJk_ytzrtC4TizINtuk",
  },
});

export default instance;
