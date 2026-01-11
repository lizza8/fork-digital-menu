import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from './LanguageSwitch';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu';

export function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/menu', label: t('nav.menu') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/reservations', label: t('nav.reservations') },
    { path: '/about', label: t('nav.about') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-h3 font-serif text-primary">Fork</span>
        </Link>

        <div className="flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.path}
                      className={`px-4 py-2 text-body transition-colors duration-normal hover:text-primary relative ${
                        isActive(item.path) ? 'text-primary font-medium' : 'text-foreground'
                      }`}
                    >
                      {item.label}
                      {isActive(item.path) && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
                      )}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitch />
        </div>
      </nav>

    </header>
  );
}
