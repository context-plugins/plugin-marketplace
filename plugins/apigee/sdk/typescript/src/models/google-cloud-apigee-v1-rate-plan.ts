import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billingPeriodSchema, type BillingPeriod } from "./billing-period.js";
import { consumptionPricingTypeSchema, type ConsumptionPricingType } from "./consumption-pricing-type.js";
import {
  googleCloudApigeeV1RateRangeSchema,
  type GoogleCloudApigeeV1RateRange,
} from "./google-cloud-apigee-v1-rate-range.js";
import {
  googleCloudApigeeV1RevenueShareRangeSchema,
  type GoogleCloudApigeeV1RevenueShareRange,
} from "./google-cloud-apigee-v1-revenue-share-range.js";
import { googleTypeMoney5Schema, type GoogleTypeMoney5 } from "./google-type-money5.js";
import { googleTypeMoney6Schema, type GoogleTypeMoney6 } from "./google-type-money6.js";
import { paymentFundingModelSchema, type PaymentFundingModel } from "./payment-funding-model.js";
import { revenueShareTypeSchema, type RevenueShareType } from "./revenue-share-type.js";
import { state7Schema, type State7 } from "./state7.js";

/** Rate plan details. */
export type GoogleCloudApigeeV1RatePlan = {
  /**
   * API call volume ranges and the fees charged when the total number of API calls is within a
   * given range. The method used to calculate the final fee depends on the selected pricing model.
   * For example, if the pricing model is `BANDED` and the ranges are defined as follows: ``` {
   * "start": 1, "end": 100, "fee": 2 }, { "start": 101, "end": 200, "fee": 1.50 }, { "start": 201,
   * "end": 0, "fee": 1 }, } ``` Then the following fees would be charged based on the total number
   * of API calls (assuming the currency selected is `USD`): * 50 calls cost 50 x $2 = $100 * 150
   * calls cost 100 x $2 + 50 x $1.5 = $275 * 250 calls cost 100 x $2 + 100 x $1.5 + 50 x $1 = $400
   * * 500 calls cost 100 x $2 + 100 x $1.5 + 300 x $1 = $650
   */
  consumptionPricingRates?: GoogleCloudApigeeV1RateRange[];
  /** Description of the rate plan. */
  description?: string;
  /** Frequency at which the customer will be billed. */
  billingPeriod?: BillingPeriod;
  /** Frequency at which the fixed fee is charged. */
  fixedFeeFrequency?: number;
  /**
   * Time when the rate plan will expire in milliseconds since epoch. Set to 0 or `null` to indicate
   * that the rate plan should never expire.
   */
  endTime?: string;
  /** Name of the API product that the rate plan is associated with. */
  apiproduct?: string;
  /** Current state of the rate plan (draft or published). */
  state?: State7;
  /** Output only. Name of the rate plan. */
  name?: string;
  /** Time when the rate plan becomes active in milliseconds since epoch. */
  startTime?: string;
  /** Output only. Time the rate plan was last modified in milliseconds since epoch. */
  lastModifiedAt?: string;
  /** Display name of the rate plan. */
  displayName?: string;
  /** Output only. Time that the rate plan was created in milliseconds since epoch. */
  createdAt?: string;
  /** Method used to calculate the revenue that is shared with developers. */
  revenueShareType?: RevenueShareType;
  /** Pricing model used for consumption-based charges. */
  consumptionPricingType?: ConsumptionPricingType;
  /**
   * Fixed amount that is charged at a defined interval and billed in advance of use of the API
   * product. The fee will be prorated for the first billing period.
   */
  fixedRecurringFee?: GoogleTypeMoney5;
  /** Initial, one-time fee paid when purchasing the API product. */
  setupFee?: GoogleTypeMoney6;
  /**
   * Currency to be used for billing. Consists of a three-letter code as defined by the [ISO
   * 4217](https://en.wikipedia.org/wiki/ISO_4217) standard.
   */
  currencyCode?: string;
  /** Details of the revenue sharing model. */
  revenueShareRates?: GoogleCloudApigeeV1RevenueShareRange[];
  /**
   * DEPRECATED: This field is no longer supported and will eventually be removed when Apigee Hybrid
   * 1.5/1.6 is no longer supported. Instead, use the `billingType` field inside
   * `DeveloperMonetizationConfig` resource. Flag that specifies the billing account type, prepaid
   * or postpaid.
   *
   * @deprecated
   */
  paymentFundingModel?: PaymentFundingModel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1RatePlanSchema: Schema<GoogleCloudApigeeV1RatePlan> =
  s.object<GoogleCloudApigeeV1RatePlan>(
    {
      consumptionPricingRates: s.optional(s.array(s.lazy(() => googleCloudApigeeV1RateRangeSchema))),
      description: s.optional(s.string()),
      billingPeriod: s.optional(s.lazy(() => billingPeriodSchema)),
      fixedFeeFrequency: s.optional(s.int()),
      endTime: s.optional(s.string()),
      apiproduct: s.optional(s.string()),
      state: s.optional(s.lazy(() => state7Schema)),
      name: s.optional(s.string()),
      startTime: s.optional(s.string()),
      lastModifiedAt: s.optional(s.string()),
      displayName: s.optional(s.string()),
      createdAt: s.optional(s.string()),
      revenueShareType: s.optional(s.lazy(() => revenueShareTypeSchema)),
      consumptionPricingType: s.optional(s.lazy(() => consumptionPricingTypeSchema)),
      fixedRecurringFee: s.optional(s.lazy(() => googleTypeMoney5Schema)),
      setupFee: s.optional(s.lazy(() => googleTypeMoney6Schema)),
      currencyCode: s.optional(s.string()),
      revenueShareRates: s.optional(s.array(s.lazy(() => googleCloudApigeeV1RevenueShareRangeSchema))),
      paymentFundingModel: s.optional(s.lazy(() => paymentFundingModelSchema)),
    },
    { additionalProperties: s.json() },
  );
