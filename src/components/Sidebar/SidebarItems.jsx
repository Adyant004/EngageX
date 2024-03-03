import CreatePost from "./CreatePost";
import Friends from "./Friends";
import Home from "./Home";
import ProfileLink from "./ProfileLink";
import Search from "./Search";

const SidebarItems = () => {
	return (
		<>
			<Home />
			<Search />
			<Friends />
			<CreatePost />
			<ProfileLink />
		</>
	);
};

export default SidebarItems;
