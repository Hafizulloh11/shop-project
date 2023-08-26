import {
	Card as BaseCard,
	Image,
	Text,
	Group,
	Badge,
	createStyles,
	Button,
	rem,
  Flex,
} from "@mantine/core";
import { Types } from "../../../modules";
import { IconShoppingBagPlus } from "@tabler/icons-react";
import { SaleType } from "../../../modules/types";

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
	},

	imageSection: {
		padding: theme.spacing.md,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderBottom: `${rem(1)} solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},

	label: {
		marginBottom: theme.spacing.xs,
		lineHeight: 1,
		fontWeight: 700,
		fontSize: theme.fontSizes.xs,
		letterSpacing: rem(-0.25),
		textTransform: "uppercase",
	},

	section: {
		padding: theme.spacing.md,
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},

	icon: {
		marginRight: rem(5),
		color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[5],
	},
}));

interface CardProps {
	product: Types.IEntity.Product;
	type: SaleType;
}

export default function Card({ product, type }: CardProps) {
	const { classes } = useStyles();

	return (
		<BaseCard withBorder h="max-content" radius="md" className={classes.card}>
			<BaseCard.Section className={classes.imageSection}>
				<Image src={product.image} alt="Tesla Model S" />
			</BaseCard.Section>

			<Group position="apart" mt="md" mb="md">
				<div>
					<Text fw={500}>{product.title}</Text>
					<Text fz="xs" c="dimmed">
						{product.description}
					</Text>
				</div>
			</Group>

			<Flex justify="space-between">
				<div>
					<Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
						{product.price}$
					</Text>
					<Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
						per day
					</Text>
				</div>

				<Button radius="xl">
					<Text mr={5}>{type}</Text>
					<IconShoppingBagPlus />
				</Button>
			</Flex>
		</BaseCard>
	);
}
