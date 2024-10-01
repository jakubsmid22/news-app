import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../state/store";
import { getNews, SingleNews } from "../features/newsSlice";
import { useEffect } from "react";
import News from "./News";

interface NewsType {
  status: string;
  sources: object[];
}

const NewsList = () => {
  const { news, isLoading } = useSelector(
    (state: RootState) => state.news as { news: NewsType; isLoading: boolean }
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  if (isLoading) return <div className="text-center text-xl">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      {news.status !== "ok" ? (
        <div className="text-red-500 text-center">Error</div>
      ) : news.sources.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(news.sources as SingleNews[]).map((e: SingleNews) => (
            <News key={e.id} {...e} />
          ))}
        </div>
      ) : (
        <div className="text-center">No news</div>
      )}
    </div>
  );
};

export default NewsList;