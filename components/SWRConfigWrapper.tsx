// components/SWRConfigWrapper.tsx
import React, { ReactNode } from 'react';
import { SWRConfig as OriginalSWRConfig } from 'swr';

interface SWRConfigWrapperProps {
  children: ReactNode;
  [key: string]: any;
}

const SWRConfigWrapper: React.FC<SWRConfigWrapperProps> = ({ children, ...config }) => {
  const value = {
    fetcher: (url: string) => fetch(url).then((res) => res.json()),
    ...config,
  };

  return <OriginalSWRConfig value={value}>{children}</OriginalSWRConfig>;
};

export default SWRConfigWrapper;
