import { Outlet } from "react-router-dom";

//Outletを表示切り替え
const BookList = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default BookList;
