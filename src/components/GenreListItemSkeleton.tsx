import {
  Box,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListItemSkeleton = () => {
  return (
    <HStack paddingY={2}>
      <Skeleton height="32px" width="32px" />
      <Box width='100px' >
        <SkeletonText noOfLines={1}/>
      </Box>
    </HStack>
  );
};

export default GenreListItemSkeleton;
