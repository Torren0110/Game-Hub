import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onSubmit: (searchText: string) => void
}

const SearchInput = ({ onSubmit }: Props) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <form style={{ width: "100%" }} onSubmit={(event) => {
            event.preventDefault();
            if(ref.current) {
                onSubmit(ref.current.value);
            }
        }} >
        <InputGroup >
            <InputLeftElement children={<BsSearch />} />
            <Input ref={ref} placeholder="Search Games...." borderRadius={20}/>
        </InputGroup>
        </form>
    );
}

export default SearchInput;