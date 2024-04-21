import { PinCard } from "./PinCard";

export interface Pin {
  id: string;
  image_url: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  boardId: string;
}

const pins: Pin[] = [
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
    "id": "d7771470-f062-4832-bfb1-5d9e57b211f6",
    "image_url": "https://fastly.picsum.photos/id/612/200/300.jpg?hmac=vJ35AV5-TQa5ET5az0aESTnI3zaFCjRYD9OnYaiYIYc",
    "description": "Image description3",
    "createdAt": "2024-03-30T14:28:07.457Z",
    "updatedAt": "2024-03-30T14:28:07.457Z",
    "authorId": "787e1d38-5e9d-4bb9-bee6-f9294b730501",
    "boardId": "e9ea9e3d-13bd-418a-ba5e-bd354c017ab2"
  },
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
    "id": "d7771470-f062-4832-bfb1-5d9e57b211f6",
    "image_url": "https://fastly.picsum.photos/id/612/200/300.jpg?hmac=vJ35AV5-TQa5ET5az0aESTnI3zaFCjRYD9OnYaiYIYc",
    "description": "Image description3",
    "createdAt": "2024-03-30T14:28:07.457Z",
    "updatedAt": "2024-03-30T14:28:07.457Z",
    "authorId": "787e1d38-5e9d-4bb9-bee6-f9294b730501",
    "boardId": "e9ea9e3d-13bd-418a-ba5e-bd354c017ab2"
  },
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
    "id": "d7771470-f062-4832-bfb1-5d9e57b211f6",
    "image_url": "https://fastly.picsum.photos/id/612/200/300.jpg?hmac=vJ35AV5-TQa5ET5az0aESTnI3zaFCjRYD9OnYaiYIYc",
    "description": "Image description3",
    "createdAt": "2024-03-30T14:28:07.457Z",
    "updatedAt": "2024-03-30T14:28:07.457Z",
    "authorId": "787e1d38-5e9d-4bb9-bee6-f9294b730501",
    "boardId": "e9ea9e3d-13bd-418a-ba5e-bd354c017ab2"
  },

];

export const Pins = () => {
  return (
    <section
      id="pins"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This Landing Page
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {pins.map(({image_url, authorId, description}) => (
          <PinCard image_url={image_url} authorId={authorId} description={description} />
        ))}
      </div>
    </section>
  );
};
