import { Image, List, Button } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
import GenreListItemSkeleton from "./GenreListItemSkeleton";
import GenreListItemContainer from "./GenreListItemContainer";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenre();

  if (error) return null;

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListItemSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <GenreListItemContainer key={genre.id}>
          <Image
            boxSize="32px"
            borderRadius={8}
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Button
            onClick={() => onSelectGenre(genre)}
            fontSize="lg"
            variant="link"
          >
            {genre.name}
          </Button>
        </GenreListItemContainer>
      ))}
    </List>
  );
};

export default GenreList;
