import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        menu: 'Menu',
        gallery: 'Gallery',
        reservations: 'Reservations',
        about: 'About',
      },
      home: {
        welcome: 'Welcome to Fork',
        subtitle: 'Modern Cuisine in Tbilisi',
        description: 'Experience the finest contemporary dining in the heart of Tbilisi. Our chefs blend traditional Georgian flavors with modern culinary techniques.',
        todaysSpecial: "Today's Special",
        makeReservation: 'Make a Reservation',
      },
      menu: {
        title: 'Our Menu',
        starters: 'Starters',
        mains: 'Mains',
        desserts: 'Desserts',
        drinks: 'Drinks',
        dailySpecials: 'Daily Specials',
        addToOrder: 'Add to Order',
      },
      gallery: {
        title: 'Gallery',
        filterAll: 'All',
        filterInterior: 'Interior',
        filterPlates: 'Plates',
        filterDrinks: 'Drinks',
      },
      reservation: {
        title: 'Make a Reservation',
        name: 'Name',
        phone: 'Phone',
        date: 'Date',
        time: 'Time',
        guests: 'Number of Guests',
        submit: 'Reserve Table',
        success: 'Table reserved successfully!',
        undo: 'Undo',
      },
      about: {
        title: 'About Fork',
        subtitle: 'Where Tradition Meets Innovation',
        description: 'Fork is a modern restaurant in the heart of Tbilisi, dedicated to bringing you the finest contemporary cuisine. Our talented chefs combine traditional Georgian ingredients with innovative cooking techniques to create unforgettable dining experiences.',
        values: 'Our Values',
        quality: 'Quality Ingredients',
        innovation: 'Culinary Innovation',
        service: 'Exceptional Service',
        location: 'Location',
        hours: 'Opening Hours',
        contact: 'Contact Us',
        address: '123 Rustaveli Avenue, Tbilisi',
        hoursText: 'Mon-Sun: 12:00 - 23:00',
        scanQR: 'Scan to View Menu',
      },
      footer: {
        address: '123 Rustaveli Avenue, Tbilisi, Georgia',
        hours: 'Open Daily: 12:00 - 23:00',
        followUs: 'Follow Us',
        scanMenu: 'Scan for Menu',
      },
    },
  },
  ka: {
    translation: {
      nav: {
        home: 'მთავარი',
        menu: 'მენიუ',
        gallery: 'გალერეა',
        reservations: 'დაჯავშნა',
        about: 'ჩვენს შესახებ',
      },
      home: {
        welcome: 'კეთილი იყოს თქვენი მობრძანება Fork-ში',
        subtitle: 'თანამედროვე სამზარეულო თბილისში',
        description: 'გამოსცადეთ საუკეთესო თანამედროვე სასადილო თბილისის გულში. ჩვენი შეფ-მზარეულები აერთიანებენ ტრადიციულ ქართულ არომატებს თანამედროვე კულინარიულ ტექნიკასთან.',
        todaysSpecial: 'დღის სპეციალური',
        makeReservation: 'მაგიდის დაჯავშნა',
      },
      menu: {
        title: 'ჩვენი მენიუ',
        starters: 'წამსაწყები',
        mains: 'ძირითადი კერძები',
        desserts: 'დესერტები',
        drinks: 'სასმელები',
        dailySpecials: 'დღის სპეციალური',
        addToOrder: 'შეკვეთაში დამატება',
      },
      gallery: {
        title: 'გალერეა',
        filterAll: 'ყველა',
        filterInterior: 'ინტერიერი',
        filterPlates: 'კერძები',
        filterDrinks: 'სასმელები',
      },
      reservation: {
        title: 'მაგიდის დაჯავშნა',
        name: 'სახელი',
        phone: 'ტელეფონი',
        date: 'თარიღი',
        time: 'დრო',
        guests: 'სტუმრების რაოდენობა',
        submit: 'მაგიდის დაჯავშნა',
        success: 'მაგიდა წარმატებით დაჯავშნილია!',
        undo: 'გაუქმება',
      },
      about: {
        title: 'Fork-ის შესახებ',
        subtitle: 'სადაც ტრადიცია ხვდება ინოვაციას',
        description: 'Fork არის თანამედროვე რესტორანი თბილისის გულში, რომელიც ეძღვნება საუკეთესო თანამედროვე სამზარეულოს მიწოდებას. ჩვენი ნიჭიერი შეფ-მზარეულები აერთიანებენ ტრადიციულ ქართულ ინგრედიენტებს ინოვაციურ მომზადების ტექნიკასთან.',
        values: 'ჩვენი ღირებულებები',
        quality: 'ხარისხიანი ინგრედიენტები',
        innovation: 'კულინარიული ინოვაცია',
        service: 'განსაკუთრებული მომსახურება',
        location: 'მდებარეობა',
        hours: 'სამუშაო საათები',
        contact: 'დაგვიკავშირდით',
        address: 'რუსთაველის გამზირი 123, თბილისი',
        hoursText: 'ორშ-კვი: 12:00 - 23:00',
        scanQR: 'დაასკანერეთ მენიუს სანახავად',
      },
      footer: {
        address: 'რუსთაველის გამზირი 123, თბილისი, საქართველო',
        hours: 'ღია ყოველდღე: 12:00 - 23:00',
        followUs: 'გამოგვყევით',
        scanMenu: 'დაასკანერეთ მენიუსთვის',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
