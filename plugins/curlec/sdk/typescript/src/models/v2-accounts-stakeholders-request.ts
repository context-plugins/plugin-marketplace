import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kyc1Schema, type Kyc1 } from "./kyc1.js";
import { relationship1Schema, type Relationship1 } from "./relationship1.js";

export type V2AccountsStakeholdersRequest = {
  name: string;
  email: string;
  percentageOwnership?: number;
  relationship?: Relationship1;
  phone?: Record<string, unknown>;
  addresses?: Record<string, unknown>;
  kyc?: Kyc1;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v2AccountsStakeholdersRequestProperties: s.Shape<V2AccountsStakeholdersRequest> = {
  name: s.string(),
  email: s.string(),
  percentageOwnership: s.optional(s.float64()),
  relationship: s.optional(s.lazy(() => relationship1Schema)),
  phone: s.optional(s.record(s.string(), s.unknown())),
  addresses: s.optional(s.record(s.string(), s.unknown())),
  kyc: s.optional(s.lazy(() => kyc1Schema)),
  notes: s.optional(s.record(s.string(), s.string())),
  _keysMap: {
    percentageOwnership: "percentage_ownership",
  },
};

export const v2AccountsStakeholdersRequestInternalSchema: Schema<V2AccountsStakeholdersRequest> =
  s.object<V2AccountsStakeholdersRequest>(v2AccountsStakeholdersRequestProperties, {
    additionalProperties: s.json(),
  });

export const v2AccountsStakeholdersRequestSchema: Schema<V2AccountsStakeholdersRequest> = s.lazySchema(() =>
  s.object<V2AccountsStakeholdersRequest>(
    {
      ...v2AccountsStakeholdersRequestProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
