import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";

const Search = ({ results }) => {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term}- Google Search</title>
      </Head>

      <Header />

      <SearchResults results={results} />
    </div>
  );
};

export default Search;

// For SSR
export async function getServerSideProps(context) {
  const useDummyData = false;
  //for pagination
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  //After the SERVER has rendered... pass the results to the client

  return {
    props: {
      results: data,
    },
  };
}
