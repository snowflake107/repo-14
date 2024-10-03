'use client';

import { ArrowUpRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import * as Dialog from '@radix-ui/react-dialog';
import { useTranslations } from 'next-intl';
import type { FC, PropsWithChildren, ComponentProps } from 'react';

import AvatarGroup from '@/components/Common/AvatarGroup';
import Link from '@/components/Link';

import styles from './index.module.css';

type ChangelogModalProps = PropsWithChildren<{
  heading: string;
  subheading: string;
  avatars: ComponentProps<typeof AvatarGroup>['avatars'];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}>;

const ChangelogModal: FC<ChangelogModalProps> = ({
  heading,
  subheading,
  avatars,
  children,
  open = false,
  onOpenChange = () => {},
}) => {
  const t = useTranslations();

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay}>
          <Dialog.Content className={styles.content}>
            <Dialog.Trigger className={styles.close}>
              <XMarkIcon />
            </Dialog.Trigger>

            <Dialog.Title className={styles.title}>{heading}</Dialog.Title>

            <Dialog.Description className={styles.description}>
              {subheading}
            </Dialog.Description>

            <div className={styles.authors}>
              <AvatarGroup avatars={avatars} isExpandable={false} />

              <Link href="/about/get-involved">
                {t('components.downloads.changelogModal.startContributing')}
                <ArrowUpRightIcon />
              </Link>
            </div>

            <div className={styles.wrapper}>{children}</div>

            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ChangelogModal;
