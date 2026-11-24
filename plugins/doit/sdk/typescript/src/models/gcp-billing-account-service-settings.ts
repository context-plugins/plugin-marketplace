import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  gcpBillingAccountSettingsSchema,
  type GcpBillingAccountSettings,
} from "./gcp-billing-account-settings.js";
import { service5Schema, type Service5 } from "./service5.js";

export type GcpBillingAccountServiceSettings = {
  /** Product line these settings apply to. */
  service: Service5;
  /**
   * Region scope these settings apply to, in `lower_snake_case` wire form (for example `us_east1`).
   * Always `global` for `compute`; always a concrete region (never `global`) for `cloud_sql`.
   */
  region: string;
  /** Commitment settings for this product line and region. */
  settings: GcpBillingAccountSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gcpBillingAccountServiceSettingsProperties: s.Shape<GcpBillingAccountServiceSettings> = {
  service: service5Schema,
  region: s.string(),
  settings: gcpBillingAccountSettingsSchema,
};

export const gcpBillingAccountServiceSettingsInternalSchema: Schema<GcpBillingAccountServiceSettings> =
  s.object<GcpBillingAccountServiceSettings>(gcpBillingAccountServiceSettingsProperties, {
    additionalProperties: s.json(),
  });

export const gcpBillingAccountServiceSettingsSchema: Schema<GcpBillingAccountServiceSettings> = s.lazySchema(
  () =>
    s.object<GcpBillingAccountServiceSettings>(
      {
        ...gcpBillingAccountServiceSettingsProperties,
        region: s.string().check(s.pattern("^(global|[a-z]+(_[a-z0-9]+)+)$")),
      },
      { additionalProperties: s.json() },
    ),
);
