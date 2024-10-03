'use client';

import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { useContext } from 'react';

import Select from '@/components/Common/Select';
import { ReleaseContext } from '@/providers/releaseProvider';

const getDropDownStatus = (version: string, status: string) => {
  if (status === 'LTS') {
    return `${version} (LTS)`;
  }

  if (status === 'Current') {
    return `${version} (Current)`;
  }

  return version;
};

const VersionDropdown: FC = () => {
  const { releases, release, setVersion } = useContext(ReleaseContext);
  const t = useTranslations();

  return (
    <Select
      ariaLabel={t('layouts.download.dropdown.version')}
      values={releases.map(({ status, versionWithPrefix }) => ({
        value: versionWithPrefix,
        label: getDropDownStatus(versionWithPrefix, status),
      }))}
      defaultValue={release.versionWithPrefix}
      onChange={setVersion}
      className="w-40"
      inline={true}
    />
  );
};

export default VersionDropdown;
