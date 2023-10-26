import NavigationSidebar from '@/components/navigation/navigation-sidebar';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full flex">
            <div className="hidden md:flex h-full w-[72px]">
                <NavigationSidebar />
            </div>
            <main className="h-full">{children}</main>
        </div>
    );
};

export default MainLayout;
