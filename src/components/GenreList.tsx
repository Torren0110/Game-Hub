import { Image, List, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
import GenreListItemSkeleton from "./GenreListItemSkeleton";
import GenreListItemContainer from "./GenreListItemContainer";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();

  if (error) return null;

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <List>
			{ isLoading && skeletons.map((skeleton) => (
					<GenreListItemSkeleton key={skeleton} />
			)) }
      {data.map((genre) => (
        <GenreListItemContainer key={genre.id}>
          <Image
            boxSize="32px"
            borderRadius={8}
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Text fontSize="lg">{genre.name}</Text>
        </GenreListItemContainer>
      ))}
    </List>
  );
};

export default GenreList;
