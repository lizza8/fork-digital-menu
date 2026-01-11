import { useTranslation } from 'react-i18next';
import { Switch } from './ui/switch';
import { Label } from './ui/label';

export function LanguageSwitch() {
  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === 'ka';

  const toggleLanguage = () => {
    i18n.changeLanguage(isGeorgian ? 'en' : 'ka');
  };

  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="language-switch" className="text-body-sm text-foreground cursor-pointer">
        EN
      </Label>
      <Switch
        id="language-switch"
        checked={isGeorgian}
        onCheckedChange={toggleLanguage}
        className="data-[state=checked]:bg-primary"
      />
      <Label htmlFor="language-switch" className="text-body-sm text-foreground cursor-pointer">
        GE
      </Label>
    </div>
  );
}
