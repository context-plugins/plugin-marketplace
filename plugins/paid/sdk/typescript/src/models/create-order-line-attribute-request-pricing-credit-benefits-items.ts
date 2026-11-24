import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  createOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadenceSchema,
  type CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadence,
} from "./create-order-line-attribute-request-pricing-credit-benefits-items-allocation-cadence.js";
import {
  createOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTimingSchema,
  type CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming,
} from "./create-order-line-attribute-request-pricing-credit-benefits-items-credit-grant-timing.js";
import {
  createOrderLineAttributeRequestPricingCreditBenefitsItemsRecipientSchema,
  type CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRecipient,
} from "./create-order-line-attribute-request-pricing-credit-benefits-items-recipient.js";
import {
  createOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnitSchema,
  type CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit,
} from "./create-order-line-attribute-request-pricing-credit-benefits-items-rollover-duration-unit.js";

export type CreateOrderLineAttributeRequestPricingCreditBenefitsItems = {
  id: string;
  creditsCurrencyId?: string;
  recipient?: CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRecipient;
  amount: number;
  rolloverAmount?: number | null;
  rolloverDuration?: number | null;
  rolloverDurationUnit?: CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit;
  allocationCadence?: CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadence;
  creditGrantTiming?: CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createOrderLineAttributeRequestPricingCreditBenefitsItemsSchema: Schema<CreateOrderLineAttributeRequestPricingCreditBenefitsItems> =
  s.object<CreateOrderLineAttributeRequestPricingCreditBenefitsItems>(
    {
      id: s.string(),
      creditsCurrencyId: s.optional(s.string()),
      recipient: s.optional(
        s.lazy(() => createOrderLineAttributeRequestPricingCreditBenefitsItemsRecipientSchema),
      ),
      amount: s.float64(),
      rolloverAmount: s.optionalNullable(s.float64()),
      rolloverDuration: s.optionalNullable(s.float64()),
      rolloverDurationUnit: s.optional(
        s.lazy(() => createOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnitSchema),
      ),
      allocationCadence: s.optional(
        s.lazy(() => createOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadenceSchema),
      ),
      creditGrantTiming: s.optional(
        s.lazy(() => createOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTimingSchema),
      ),
    },
    { additionalProperties: s.json() },
  );
