import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V2AccountsStakeholdersRequest1 = {
  name?: string;
  percentageOwnership?: number;
  relationship?: Record<string, unknown>;
  phone?: Record<string, unknown>;
  addresses?: Record<string, unknown>;
  kyc?: Record<string, unknown>;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v2AccountsStakeholdersRequest1Properties: s.Shape<V2AccountsStakeholdersRequest1> = {
  name: s.optional(s.string()),
  percentageOwnership: s.optional(s.float64()),
  relationship: s.optional(s.record(s.string(), s.unknown())),
  phone: s.optional(s.record(s.string(), s.unknown())),
  addresses: s.optional(s.record(s.string(), s.unknown())),
  kyc: s.optional(s.record(s.string(), s.unknown())),
  notes: s.optional(s.record(s.string(), s.string())),
  _keysMap: {
    percentageOwnership: "percentage_ownership",
  },
};

export const v2AccountsStakeholdersRequest1InternalSchema: Schema<V2AccountsStakeholdersRequest1> =
  s.object<V2AccountsStakeholdersRequest1>(v2AccountsStakeholdersRequest1Properties, {
    additionalProperties: s.json(),
  });

export const v2AccountsStakeholdersRequest1Schema: Schema<V2AccountsStakeholdersRequest1> = s.lazySchema(() =>
  s.object<V2AccountsStakeholdersRequest1>(
    {
      ...v2AccountsStakeholdersRequest1Properties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
