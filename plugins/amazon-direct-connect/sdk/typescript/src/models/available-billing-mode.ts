import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billingModeSchema, type BillingMode } from "./billing-mode.js";

export type AvailableBillingMode = {
  /** The billing mode. */
  billingMode?: BillingMode;
  /** The port speeds available for the billing mode. */
  availablePortSpeeds?: string[];
  /** The Amazon Web Services Regions included with the billing mode. */
  includedRegions?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const availableBillingModeSchema: Schema<AvailableBillingMode> = s.object<AvailableBillingMode>(
  {
    billingMode: s.optional(s.lazy(() => billingModeSchema)),
    availablePortSpeeds: s.optional(s.array(s.string())),
    includedRegions: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
