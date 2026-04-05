import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import i18nextConfig from '../../../next-i18next.config.js';

export default function ChatbotPage() {
  const { t } = useTranslation('chatbot');

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{t('title')}</title>
      </Head>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">{t('heading')}</h1>
        <div className="rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="http://39.101.77.129/chatbot/aSNlVJXKb2FwuagB"
            style={{ width: '100%', height: '700px', minHeight: '700px' }}
            frameBorder="0"
            allow="microphone"
            title={t('iframeTitle')}
          />
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: i18nextConfig.i18n.locales.map((locale) => ({
      params: { locale },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const locale = context.params?.locale as string;
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'navbar', 'chatbot'])),
    },
  };
};