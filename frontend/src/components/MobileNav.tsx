import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className='space-y-3'>
                <SheetTitle>
                    <span>welcome to mernsEats.com</span>
                </SheetTitle>
                <Separator />
                <SheetDescription className='flex'>
                    <Button className='flex-1 font-bold bg-orange-500'>LOG IN</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
