import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Moez", text: "Learning React is Fun !" },
  { id: "q2", author: "Majdi", text: "My Brother love Java and Angular" },
  { id: "q3", author: "Maher", text: "My Boss is genius" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
