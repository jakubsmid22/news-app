interface NewsProps {
  category: string;
  country: string;
  description: string;
  id: string;
  name: string;
  url: string;
}

const News = ({ category, description, name, url }: NewsProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
      <div>
      <h1 className="text-xl font-bold mb-2">{name}</h1>
      <p className="text-gray-700 mb-4">{description}</p>
      </div>
      <div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          Read more
        </a>
        <p className="mt-2 text-sm text-gray-600">Category: {category}</p>
      </div>
    </div>
  );
};

export default News;
