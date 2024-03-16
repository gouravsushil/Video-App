import React from 'react'
import { Drawer,
    DrawerBody,
    DrawerHeader, 
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
// import { HamburgerIcon } from '@chakra-ui/icons';
import {BiMenuAltLeft} from "react-icons/bi";

const Header = () => {

const {isOpen,onOpen,onClose} = useDisclosure();
  return <>
    <Button colorScheme="purple" 
        pos={'fixed'}
        top={'4'}
        left={'4'}
        p={'0'}
        w={'10'}
        h={'10'}
        zIndex={'overlay'}
        borderRadius={'full'}
        onClick = {onOpen}

    >
        <BiMenuAltLeft size={'20'}/>
    </Button>

    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>VideoHub</DrawerHeader>

            <DrawerBody>
                <VStack alignItems={'flex-start'}>  {/* vertical stack. By default the items are align-center */}
                    <Button colorScheme={'purple'} variant={'ghost'}> 
                        <Link to="/" onClick={onClose}>Home</Link>
                    </Button>
                    <Button colorScheme={'purple'} variant={'ghost'}> 
                        <Link to="/videos" onClick={onClose}>Videos</Link>
                    </Button>
                    <Button colorScheme={'purple'} variant={'ghost'}> 
                        <Link to="/vieos?category=free" onClick={onClose}>Free Videos</Link>
                    </Button>
                    <Button colorScheme={'purple'} variant={'ghost'}> 
                        <Link to="/upload" onClick={onClose}>Upload Video</Link>
                    </Button>
                </VStack>

                <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}> 
                    <Button colorScheme={'purple'}> 
                        <Link to="/login" onClick={onClose}>Log In</Link>
                    </Button>
                    <Button colorScheme={'purple'} variant={'outline'}> 
                        <Link to="/signup" onClick={onClose}>Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
  </>
}

export default Header
