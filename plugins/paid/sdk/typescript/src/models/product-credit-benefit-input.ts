import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  ProductCreditBenefitInputAllocationCadence,
  productCreditBenefitInputAllocationCadenceSchema,
} from "./product-credit-benefit-input-allocation-cadence.js";
import {
  productCreditBenefitInputCreditGrantTimingSchema,
  type ProductCreditBenefitInputCreditGrantTiming,
} from "./product-credit-benefit-input-credit-grant-timing.js";
import {
  ProductCreditBenefitInputRecipient,
  productCreditBenefitInputRecipientSchema,
} from "./product-credit-benefit-input-recipient.js";

export type ProductCreditBenefitInput = {
  creditsCurrencyId: string;
  amount: number;
  /** @default ProductCreditBenefitInputRecipient.Organization */
  recipient?: ProductCreditBenefitInputRecipient;
  /** @default false */
  isInfiniteTotal?: boolean;
  /** @default ProductCreditBenefitInputAllocationCadence.Upfront */
  allocationCadence?: ProductCreditBenefitInputAllocationCadence;
  creditGrantTiming?: ProductCreditBenefitInputCreditGrantTiming;
  overageUnitPrice?: number | null;
  rolloverAmount?: number | null;
  rolloverDuration?: number | null;
  rolloverDurationUnit?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productCreditBenefitInputSchema: Schema<ProductCreditBenefitInput> =
  s.object<ProductCreditBenefitInput>(
    {
      creditsCurrencyId: s.string(),
      amount: s.float64(),
      recipient: s.defaulted(
        productCreditBenefitInputRecipientSchema,
        ProductCreditBenefitInputRecipient.Organization,
      ),
      isInfiniteTotal: s.defaulted(s.boolean(), false),
      allocationCadence: s.defaulted(
        productCreditBenefitInputAllocationCadenceSchema,
        ProductCreditBenefitInputAllocationCadence.Upfront,
      ),
      creditGrantTiming: s.optional(s.lazy(() => productCreditBenefitInputCreditGrantTimingSchema)),
      overageUnitPrice: s.optionalNullable(s.float64()),
      rolloverAmount: s.optionalNullable(s.float64()),
      rolloverDuration: s.optionalNullable(s.float64()),
      rolloverDurationUnit: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
