import useFetchData from "../utils/useFetchData";
const MainScreen = () => {
  const data = useFetchData(
    "https://api-cache-test.leanagri.com/pop/pop_list/en/64/pop_list.json"
  );
  console.log(data);
  return <div>Main Screen</div>;
};

export default MainScreen;
