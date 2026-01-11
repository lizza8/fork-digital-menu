import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReservationPage } from './pages/ReservationPage';
import { AboutPage } from './pages/AboutPage';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reservations" element={<ReservationPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
        <Toaster />
      </Router>
    </I18nextProvider>
  );
}

export default App;
