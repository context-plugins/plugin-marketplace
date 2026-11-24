import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billingType1Schema, type BillingType1 } from "./billing-type1.js";

/** Monetization configuration for the developer. */
export type GoogleCloudApigeeV1DeveloperMonetizationConfig = {
  /** Billing type. */
  billingType?: BillingType1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DeveloperMonetizationConfigSchema: Schema<GoogleCloudApigeeV1DeveloperMonetizationConfig> =
  s.object<GoogleCloudApigeeV1DeveloperMonetizationConfig>(
    {
      billingType: s.optional(s.lazy(() => billingType1Schema)),
    },
    { additionalProperties: s.json() },
  );
