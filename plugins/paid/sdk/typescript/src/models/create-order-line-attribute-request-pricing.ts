import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  createOrderLineAttributeRequestPricingBillingFrequencySchema,
  type CreateOrderLineAttributeRequestPricingBillingFrequency,
} from "./create-order-line-attribute-request-pricing-billing-frequency.js";
import {
  createOrderLineAttributeRequestPricingBillingTypeSchema,
  type CreateOrderLineAttributeRequestPricingBillingType,
} from "./create-order-line-attribute-request-pricing-billing-type.js";
import {
  createOrderLineAttributeRequestPricingChargeTypeSchema,
  type CreateOrderLineAttributeRequestPricingChargeType,
} from "./create-order-line-attribute-request-pricing-charge-type.js";
import {
  createOrderLineAttributeRequestPricingCreditBenefitsItemsSchema,
  type CreateOrderLineAttributeRequestPricingCreditBenefitsItems,
} from "./create-order-line-attribute-request-pricing-credit-benefits-items.js";
import {
  createOrderLineAttributeRequestPricingCreditUnitBracketsItemsSchema,
  type CreateOrderLineAttributeRequestPricingCreditUnitBracketsItems,
} from "./create-order-line-attribute-request-pricing-credit-unit-brackets-items.js";
import {
  createOrderLineAttributeRequestPricingPricePointsSchema,
  type CreateOrderLineAttributeRequestPricingPricePoints,
} from "./create-order-line-attribute-request-pricing-price-points.js";
import {
  createOrderLineAttributeRequestPricingPricingInputSchema,
  type CreateOrderLineAttributeRequestPricingPricingInput,
} from "./create-order-line-attribute-request-pricing-pricing-input.js";
import {
  createOrderLineAttributeRequestPricingPricingModelSchema,
  type CreateOrderLineAttributeRequestPricingPricingModel,
} from "./create-order-line-attribute-request-pricing-pricing-model.js";
import {
  createOrderLineAttributeRequestPricingSignalTypeSchema,
  type CreateOrderLineAttributeRequestPricingSignalType,
} from "./create-order-line-attribute-request-pricing-signal-type.js";

export type CreateOrderLineAttributeRequestPricing = {
  eventName?: string;
  chargeType: CreateOrderLineAttributeRequestPricingChargeType;
  /**
   * Single flat price point for this order attribute override. Do not send a currency-keyed map
   * here.
   */
  pricePoints: CreateOrderLineAttributeRequestPricingPricePoints;
  pricingModel: CreateOrderLineAttributeRequestPricingPricingModel;
  billingFrequency?: CreateOrderLineAttributeRequestPricingBillingFrequency;
  billingFrequencyCustomMonths?: number;
  billingType?: CreateOrderLineAttributeRequestPricingBillingType;
  signalType?: CreateOrderLineAttributeRequestPricingSignalType;
  creditsCurrencyId?: string;
  creditCost?: number;
  overageUnitPrice?: number;
  creditRolloverAmount?: number;
  creditBenefits?: CreateOrderLineAttributeRequestPricingCreditBenefitsItems[];
  pricingInput?: CreateOrderLineAttributeRequestPricingPricingInput;
  creditUnitBrackets?: CreateOrderLineAttributeRequestPricingCreditUnitBracketsItems[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createOrderLineAttributeRequestPricingSchema: Schema<CreateOrderLineAttributeRequestPricing> =
  s.object<CreateOrderLineAttributeRequestPricing>(
    {
      eventName: s.optional(s.string()),
      chargeType: createOrderLineAttributeRequestPricingChargeTypeSchema,
      pricePoints: createOrderLineAttributeRequestPricingPricePointsSchema,
      pricingModel: createOrderLineAttributeRequestPricingPricingModelSchema,
      billingFrequency: s.optional(
        s.lazy(() => createOrderLineAttributeRequestPricingBillingFrequencySchema),
      ),
      billingFrequencyCustomMonths: s.optional(s.int()),
      billingType: s.optional(s.lazy(() => createOrderLineAttributeRequestPricingBillingTypeSchema)),
      signalType: s.optional(s.lazy(() => createOrderLineAttributeRequestPricingSignalTypeSchema)),
      creditsCurrencyId: s.optional(s.string()),
      creditCost: s.optional(s.float64()),
      overageUnitPrice: s.optional(s.float64()),
      creditRolloverAmount: s.optional(s.float64()),
      creditBenefits: s.optional(
        s.array(s.lazy(() => createOrderLineAttributeRequestPricingCreditBenefitsItemsSchema)),
      ),
      pricingInput: s.optional(s.lazy(() => createOrderLineAttributeRequestPricingPricingInputSchema)),
      creditUnitBrackets: s.optional(
        s.array(s.lazy(() => createOrderLineAttributeRequestPricingCreditUnitBracketsItemsSchema)),
      ),
    },
    { additionalProperties: s.json() },
  );
