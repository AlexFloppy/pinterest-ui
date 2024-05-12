import * as types from "../actions/types"


const initialState =
[
    {
      "id": "d7771470-f062-4832-bfb1-5d9e57b211f6",
      "image_url": "https://fastly.picsum.photos/id/612/200/300.jpg?hmac=vJ35AV5-TQa5ET5az0aESTnI3zaFCjRYD9OnYaiYIYc",
      "description": "Image description3",
      "createdAt": "2024-03-30T14:28:07.457Z",
      "updatedAt": "2024-03-30T14:28:07.457Z",
      "authorId": "787e1d38-5e9d-4bb9-bee6-f9294b730501",
      "boardId": "e9ea9e3d-13bd-418a-ba5e-bd354c017ab2"
    },
    {
      "id": "d7771470-f062-4832-bfb1-5d9e57b211f62",
      "image_url": "https://fastly.picsum.photos/id/612/200/300.jpg?hmac=vJ35AV5-TQa5ET5az0aESTnI3zaFCjRYD9OnYaiYIYc",
      "description": "Image description3",
      "createdAt": "2024-03-30T14:28:07.457Z",
      "updatedAt": "2024-03-30T14:28:07.457Z",
      "authorId": "787e1d38-5e9d-4bb9-bee6-f9294b730501",
      "boardId": "e9ea9e3d-13bd-418a-ba5e-bd354c017ab2"
    },
    {
      "id": "d7771470-f062-4832-bfb1-5d9e57b211f63",
      "image_url": "https://fastly.picsum.photos/id/612/200/300.jpg?hmac=vJ35AV5-TQa5ET5az0aESTnI3zaFCjRYD9OnYaiYIYc",
      "description": "Image description3",
      "createdAt": "2024-03-30T14:28:07.457Z",
      "updatedAt": "2024-03-30T14:28:07.457Z",
      "authorId": "787e1d38-5e9d-4bb9-bee6-f9294b730501",
      "boardId": "e9ea9e3d-13bd-418a-ba5e-bd354c017ab2"
    },
    {
      "id": "d7771470-f062-4832-bfb1-5d9e57b211f64",
      "image_url": "https://fastly.picsum.photos/id/612/200/300.jpg?hmac=vJ35AV5-TQa5ET5az0aESTnI3zaFCjRYD9OnYaiYIYc",
      "description": "Image description3",
      "createdAt": "2024-03-30T14:28:07.457Z",
      "updatedAt": "2024-03-30T14:28:07.457Z",
      "authorId": "787e1d38-5e9d-4bb9-bee6-f9294b730501",
      "boardId": "e9ea9e3d-13bd-418a-ba5e-bd354c017ab2"
    },
    {
      "id": "d7771470-f062-4832-bfb1-5d9e57b211f65",
      "image_url": "https://fastly.picsum.photos/id/612/200/300.jpg?hmac=vJ35AV5-TQa5ET5az0aESTnI3zaFCjRYD9OnYaiYIYc",
      "description": "Image description3",
      "createdAt": "2024-03-30T14:28:07.457Z",
      "updatedAt": "2024-03-30T14:28:07.457Z",
      "authorId": "787e1d38-5e9d-4bb9-bee6-f9294b730501",
      "boardId": "e9ea9e3d-13bd-418a-ba5e-bd354c017ab2"
    },
    {
      "id": "d7771470-f062-4832-bfb1-5d9e57b211f66",
      "image_url": "https://fastly.picsum.photos/id/612/200/300.jpg?hmac=vJ35AV5-TQa5ET5az0aESTnI3zaFCjRYD9OnYaiYIYc",
      "description": "Image description3",
      "createdAt": "2024-03-30T14:28:07.457Z",
      "updatedAt": "2024-03-30T14:28:07.457Z",
      "authorId": "787e1d38-5e9d-4bb9-bee6-f9294b730501",
      "boardId": "e9ea9e3d-13bd-418a-ba5e-bd354c017ab2"
    },
  
  ];

  export default function pins(state = initialState, action: any) {
    switch (action.type) {
        case types.ADD_PIN: 
            return [...state, action.payload];
        case types.ADD_PINS:
            return [...action.payload]
        default:
            return state;
    }
  }