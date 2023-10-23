import { getUserSubscriptionPlan } from "@/lib/stripe";
import Link from "next/link";

type Props = {
  closeOnCurrent: (href: string) => void;
};

async function PricingMob({ closeOnCurrent }: Props) {
  const subscriptionPlan = await getUserSubscriptionPlan();
  return (
    <>
      {subscriptionPlan?.isSubscribed ? (
        <Link href="/dashboard/billing">Manage Subscription</Link>
      ) : (
        <Link
          onClick={() => closeOnCurrent("/pricing")}
          className="flex items-center w-full font-semibold"
          href="/pricing"
        >
          Pricing
        </Link>
      )}
    </>
  );
}
export default PricingMob;
