import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  gcpBillingAccountSettingsItemInternalSchema,
  gcpBillingAccountSettingsItemSchema,
  type GcpBillingAccountSettingsItem,
} from "./gcp-billing-account-settings-item.js";

export type Ps4CommitmentsV1GcpSettingsResponse = {
  items: GcpBillingAccountSettingsItem[];
  /** Opaque cursor for the next page. Absent when this is the last page. */
  pageToken?: string | null;
  /** Number of items returned in this page. */
  rowCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ps4CommitmentsV1GcpSettingsResponseProperties: s.Shape<Ps4CommitmentsV1GcpSettingsResponse> = {
  items: s.array(s.lazy(() => gcpBillingAccountSettingsItemInternalSchema)),
  pageToken: s.optionalNullable(s.string()),
  rowCount: s.optional(s.int()),
};

export const ps4CommitmentsV1GcpSettingsResponseInternalSchema: Schema<Ps4CommitmentsV1GcpSettingsResponse> =
  s.object<Ps4CommitmentsV1GcpSettingsResponse>(ps4CommitmentsV1GcpSettingsResponseProperties, {
    additionalProperties: s.json(),
  });

export const ps4CommitmentsV1GcpSettingsResponseSchema: Schema<Ps4CommitmentsV1GcpSettingsResponse> =
  s.lazySchema(() =>
    s.object<Ps4CommitmentsV1GcpSettingsResponse>(
      {
        ...ps4CommitmentsV1GcpSettingsResponseProperties,
        items: s.array(s.lazy(() => gcpBillingAccountSettingsItemSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
