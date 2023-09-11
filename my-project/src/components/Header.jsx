

const Header = () => {
    return (
    <>
        <div className="navbar bg-base-100 px-6 lg:px-32 mt-3">
  <div className="flex-1">
    <a className=" font-bold text-2xl  lg:text-2xl">PH BLOG</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://img.freepik.com/free-photo/smiling-female-student-doing-homework-desk_1262-5768.jpg?w=996&t=st=1694441115~exp=1694441715~hmac=3e27a4f058025239388462f782c5771e983fa06170e6d5ad784c944cc7e0623a" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  <div className=" border border-b-gray-300 mx-6 lg:mx-32 mt-1"></div>
    </>
    );
};

export default Header;