import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { StyledTrigger, StyledContent, StyledSubContent } from './styled'

const DropDownMenu = () => {

    return (
        <DropdownMenu.Root  >
            <StyledTrigger >Item</StyledTrigger>
            <DropdownMenu.Portal>
                <StyledContent>
                    <DropdownMenu.Item>item 1</DropdownMenu.Item>
                    <DropdownMenu.Item>item 2</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>Sub menu {'>'} </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                            <StyledSubContent>
                                <DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
                                <DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
                                <DropdownMenu.Arrow />
                            </StyledSubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>item 3</DropdownMenu.Item>
                </StyledContent>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}

export default DropDownMenu