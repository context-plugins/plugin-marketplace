import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  gcpBillingAccountServiceSettingsInternalSchema,
  gcpBillingAccountServiceSettingsSchema,
  type GcpBillingAccountServiceSettings,
} from "./gcp-billing-account-service-settings.js";

export type GcpBillingAccountSettingsItem = {
  /** GCP Billing Account ID. */
  billingAccountId: string;
  /**
   * Settings for each product line and region scope activated on this billing account, ordered
   * `compute` first, then `cloud_sql` regions alphabetically.
   */
  services: GcpBillingAccountServiceSettings[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gcpBillingAccountSettingsItemProperties: s.Shape<GcpBillingAccountSettingsItem> = {
  billingAccountId: s.string(),
  services: s.array(s.lazy(() => gcpBillingAccountServiceSettingsInternalSchema)),
};

export const gcpBillingAccountSettingsItemInternalSchema: Schema<GcpBillingAccountSettingsItem> =
  s.object<GcpBillingAccountSettingsItem>(gcpBillingAccountSettingsItemProperties, {
    additionalProperties: s.json(),
  });

export const gcpBillingAccountSettingsItemSchema: Schema<GcpBillingAccountSettingsItem> = s.lazySchema(() =>
  s.object<GcpBillingAccountSettingsItem>(
    {
      ...gcpBillingAccountSettingsItemProperties,
      services: s.array(s.lazy(() => gcpBillingAccountServiceSettingsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
