import React from "react";

function Home({ onLogOut }) {
  return (
    <div className="text-center mt-5">
      <h2>🎉 Welcome to Home Page 🎉</h2>
      <p>Bạn đã đăng nhập thành công.</p>
      <button className="btn btn-danger mt-3" onClick={onLogOut}>
        Đăng xuất
      </button>
    </div>
  );
}

export default Home;
