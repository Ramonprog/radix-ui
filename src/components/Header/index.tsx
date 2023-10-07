import DropDownMenu from "../DorpDown/DropDownMenu"
import { Ul, Header, Li } from "./styles"

const HeaderComponent = () => {
    return (
        <Header>
            <h3>Logo</h3>
            <nav>
                <Ul>
                    <Li tabIndex={1}>Home</Li>
                    <Li tabIndex={2}>About Us</Li>
                    <Li tabIndex={3}>Product</Li>
                    <Li tabIndex={4}><DropDownMenu /></Li>
                </Ul>
            </nav>
        </Header>
    )
}

export default HeaderComponent