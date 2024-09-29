import { t } from '@extension/i18n';
import { useStorage, withErrorBoundary, withSuspense } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';
import { cn, MagicCard, Particles, RainbowButton, RetroGrid } from '@extension/ui';
// import { cn, MagicCard, Particles, RainbowButton, RetroGrid } from '@extension/ui';
// import { cn } from '@extension/ui';

import '@src/NewTab.css';
import '@src/NewTab.scss';

const NewTab = () => {
  const theme = useStorage(exampleThemeStorage);
  const isLight = theme === 'light';
  const particlesColor = isLight ? '#000000' : '#ffffff';

  return (
    <div className={cn(theme)}>
      <div className={'dark:bg-black bg-zinc-200'}>
        <header className={`App-header ${isLight ? 'text-gray-900' : 'text-gray-100'}`}>
          <Particles color={particlesColor} className="absolute inset-0" quantity={100} ease={80} refresh />
          <RetroGrid />
          <MagicCard className="h-52 w-52 !border-none !bg-gray-50/5 dark:!bg-gray-50/5 !relative">
            <div className="absolute inset-1 bg-white rounded-lg overflow-hidden dark:bg-black p-2">test</div>
          </MagicCard>
          <RainbowButton onClick={exampleThemeStorage.toggle}> {t('toggleTheme')}</RainbowButton>
        </header>
      </div>
    </div>
  );
};

export default withErrorBoundary(withSuspense(NewTab, <div>{t('loading')}</div>), <div> Error Occur </div>);
