import { Tab as HeadlessTab } from "@headlessui/react";

import { AccountCardList, useAccountsStore } from "@entities/account";

import { FloatingActionButton } from "@shared/ui/buttons";
import { PlusIcon } from "@shared/ui/icons";
import { Link } from "@shared/ui/links";

export const AccountsTabPanel = () => {
  const { order, accounts } = useAccountsStore();

  return (
    <HeadlessTab.Panel as="div" className="text-text flex flex-col gap-2.5">
      <AccountCardList
        accounts={order.map((accountId) => ({
          account: accounts[accountId],
          formattedBalance: "$0",
        }))}
      />
      <Link
        to="/accounts/create"
        className="absolute bottom-28 left-1/2 -translate-x-1/2"
      >
        <FloatingActionButton>
          <PlusIcon size="lg" />
        </FloatingActionButton>
      </Link>
    </HeadlessTab.Panel>
  );
};