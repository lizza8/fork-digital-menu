import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, MapPin, Clock } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-muted border-t border-border py-16">
      <div className="container mx-auto px-8 max-w-[1400px]">
        <div className="grid grid-cols-3 gap-12">
          <div>
            <h3 className="text-[32px] font-serif text-primary mb-6">Fork</h3>
            <div className="flex items-start gap-3 text-[16px] text-muted-foreground mb-3">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <span>{t('footer.address')}</span>
            </div>
            <div className="flex items-center gap-3 text-[16px] text-muted-foreground">
              <Clock className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
              <span>{t('footer.hours')}</span>
            </div>
          </div>

          <div>
            <h4 className="text-[20px] font-medium text-foreground mb-6">{t('footer.followUs')}</h4>
            <div className="flex gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-normal"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-normal"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[20px] font-medium text-foreground mb-6">{t('footer.scanMenu')}</h4>
            <div className="w-32 h-32 bg-background rounded-lg flex items-center justify-center">
              <img
                src="https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_5.png"
                alt="QR Code"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-[16px] text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fork Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
