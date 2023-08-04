import { HStack, ListItem } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const GenreListItemContainer = ({children}: Props) => {
    return (
        <ListItem paddingY={2}>
          <HStack>
            {children}
          </HStack>
        </ListItem>
    )
}

export default GenreListItemContainer;