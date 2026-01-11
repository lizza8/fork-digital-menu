import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  altKa: string;
  category: 'all' | 'interior' | 'plates' | 'drinks';
}

const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    url: 'https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_1.png',
    alt: 'Restaurant interior in Tbilisi',
    altKa: 'რესტორნის ინტერიერი თბილისში',
    category: 'interior',
  },
  {
    id: 'g2',
    url: 'https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_2.png',
    alt: 'Modern cuisine dish',
    altKa: 'თანამედროვე სამზარეულოს კერძი',
    category: 'plates',
  },
  {
    id: 'g3',
    url: 'https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_3.png',
    alt: 'Restaurant food gallery',
    altKa: 'რესტორნის საკვების გალერეა',
    category: 'plates',
  },
  {
    id: 'g4',
    url: 'https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_4.png',
    alt: 'Restaurant table setting at night',
    altKa: 'რესტორნის მაგიდის გაწყობა ღამით',
    category: 'interior',
  },
  {
    id: 'g5',
    url: 'https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_2.png',
    alt: 'Signature dish presentation',
    altKa: 'ხელმოწერილი კერძის პრეზენტაცია',
    category: 'plates',
  },
  {
    id: 'g6',
    url: 'https://c.animaapp.com/mkaakrfe3QXKLP/img/ai_3.png',
    alt: 'Wine and beverages',
    altKa: 'ღვინო და სასმელები',
    category: 'drinks',
  },
];

export function GalleryPage() {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'interior' | 'plates' | 'drinks'>('all');
  const isGeorgian = i18n.language === 'ka';

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-8 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[56px] font-serif text-foreground text-center mb-4">
            {t('gallery.title')}
          </h1>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-16" />
        </motion.div>

        <Tabs value={filter} onValueChange={(value) => setFilter(value as typeof filter)} className="mb-12">
          <TabsList className="w-full justify-center bg-muted border-border h-14">
            <TabsTrigger value="all" className="text-[18px] data-[state=active]:text-primary data-[state=active]:bg-background text-foreground px-8 h-12">
              {t('gallery.filterAll')}
            </TabsTrigger>
            <TabsTrigger value="interior" className="text-[18px] data-[state=active]:text-primary data-[state=active]:bg-background text-foreground px-8 h-12">
              {t('gallery.filterInterior')}
            </TabsTrigger>
            <TabsTrigger value="plates" className="text-[18px] data-[state=active]:text-primary data-[state=active]:bg-background text-foreground px-8 h-12">
              {t('gallery.filterPlates')}
            </TabsTrigger>
            <TabsTrigger value="drinks" className="text-[18px] data-[state=active]:text-primary data-[state=active]:bg-background text-foreground px-8 h-12">
              {t('gallery.filterDrinks')}
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="columns-4 gap-8 space-y-8">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="break-inside-avoid"
            >
              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-normal cursor-pointer">
                <img
                  src={image.url}
                  alt={isGeorgian ? image.altKa : image.alt}
                  className="w-full h-auto object-cover transition-transform duration-normal group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal flex items-end p-6">
                  <p className="text-[16px] text-foreground">
                    {isGeorgian ? image.altKa : image.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
