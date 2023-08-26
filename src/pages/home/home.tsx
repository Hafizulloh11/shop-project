import { Box, Container, Grid, LoadingOverlay } from "@mantine/core";
import { useProducts } from "../../modules/hooks";
import { Navbar, Card } from "./components";

interface HomeProps {}

const Home = (props: HomeProps) => {
	const { products, isLoading } = useProducts();
	if (isLoading) return <LoadingOverlay visible overlayBlur={2} />;

	console.log(products);
	return (
		<Box>
			<Navbar />
			<Container p={60} w="100%" display="grid" sx={{gridTemplateColumns: "repeat(3, 1fr)", gap: "20px"}}>
				{products.map((product) => (<Grid>
					<Grid.Col><Card product={product} type="add cart"/></Grid.Col>
				</Grid>))}
			</Container>
		</Box>
	);
};

export default Home;
