import Banner from "../Banner/Banner";
import CatagoryList from "../CatagoryList/CatagoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
             <h2 className="text-5xl text-center font-bold my-5">This is Home !</h2>            
            <Banner></Banner>
            <CatagoryList></CatagoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;