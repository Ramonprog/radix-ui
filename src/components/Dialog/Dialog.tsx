
import * as Dialog from '@radix-ui/react-dialog';
import { CustomContent } from './style';


const DialogComponent = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger     >
                <button className="Button violet">Edit profile</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <CustomContent className="DialogContent">
                    <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
                    <Dialog.Description className="DialogDescription">
                        Make changes to your profile here. Click save when you're done.
                    </Dialog.Description>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="name">
                            Name
                        </label>
                        <input className="Input" id="name" defaultValue="Pedro Duarte" />
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="username">
                            Username
                        </label>
                        <input className="Input" id="username" defaultValue="@peduarte" />
                    </fieldset>
                    <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                        <Dialog.Close asChild>
                            <button className="Button green">Save changes</button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                        <button className="IconButton" aria-label="Close">
                            x
                        </button>
                    </Dialog.Close>
                </CustomContent>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default DialogComponent;