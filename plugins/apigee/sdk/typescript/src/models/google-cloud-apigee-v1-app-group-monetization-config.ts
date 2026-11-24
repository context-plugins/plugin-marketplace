import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billingType2Schema, type BillingType2 } from "./billing-type2.js";

/** Monetization configuration for the AppGroup. */
export type GoogleCloudApigeeV1AppGroupMonetizationConfig = {
  /** Required. Billing type. */
  billingType?: BillingType2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AppGroupMonetizationConfigSchema: Schema<GoogleCloudApigeeV1AppGroupMonetizationConfig> =
  s.object<GoogleCloudApigeeV1AppGroupMonetizationConfig>(
    {
      billingType: s.optional(s.lazy(() => billingType2Schema)),
    },
    { additionalProperties: s.json() },
  );
