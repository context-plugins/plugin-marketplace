import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of feature described. */
export const FeatureType = {
  AdditionalCards: "ADDITIONAL_CARDS",
  BalanceTransfers: "BALANCE_TRANSFERS",
  BillPayment: "BILL_PAYMENT",
  BonusRewards: "BONUS_REWARDS",
  CardAccess: "CARD_ACCESS",
  CashbackOffer: "CASHBACK_OFFER",
  ComplementaryProductDiscounts: "COMPLEMENTARY_PRODUCT_DISCOUNTS",
  DigitalBanking: "DIGITAL_BANKING",
  DigitalWallet: "DIGITAL_WALLET",
  DonateInterest: "DONATE_INTEREST",
  ExtraRepayments: "EXTRA_REPAYMENTS",
  FraudProtection: "FRAUD_PROTECTION",
  FreeTxns: "FREE_TXNS",
  FreeTxnsAllowance: "FREE_TXNS_ALLOWANCE",
  Guarantor: "GUARANTOR",
  Insurance: "INSURANCE",
  InstalmentPlan: "INSTALMENT_PLAN",
  InterestFree: "INTEREST_FREE",
  InterestFreeTransfers: "INTEREST_FREE_TRANSFERS",
  LoyaltyProgram: "LOYALTY_PROGRAM",
  Notifications: "NOTIFICATIONS",
  NppEnabled: "NPP_ENABLED",
  NppPayid: "NPP_PAYID",
  Offset: "OFFSET",
  Other: "OTHER",
  Overdraft: "OVERDRAFT",
  Redraw: "REDRAW",
  RelationshipManagement: "RELATIONSHIP_MANAGEMENT",
  UnlimitedTxns: "UNLIMITED_TXNS",
} as const;
export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType] | (string & {});

export const featureTypeSchema: EnumSchema<FeatureType> = s.enumOf<FeatureType>(FeatureType);
