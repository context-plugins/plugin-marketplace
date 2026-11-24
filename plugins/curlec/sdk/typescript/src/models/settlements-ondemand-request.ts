import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SettlementsOndemandRequest = {
  /** Settlement amount in paise. */
  amount: number;
  /** Set true to settle the full available balance. Overrides amount. @default false */
  settleFullBalance?: boolean;
  /** Custom reference note. Max 30 alphanumeric characters. */
  description?: string;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const settlementsOndemandRequestProperties: s.Shape<SettlementsOndemandRequest> = {
  amount: s.int(),
  settleFullBalance: s.defaulted(s.boolean(), false),
  description: s.optional(s.string()),
  notes: s.optional(s.record(s.string(), s.string())),
  _keysMap: {
    settleFullBalance: "settle_full_balance",
  },
};

export const settlementsOndemandRequestInternalSchema: Schema<SettlementsOndemandRequest> =
  s.object<SettlementsOndemandRequest>(settlementsOndemandRequestProperties, {
    additionalProperties: s.json(),
  });

export const settlementsOndemandRequestSchema: Schema<SettlementsOndemandRequest> = s.lazySchema(() =>
  s.object<SettlementsOndemandRequest>(
    {
      ...settlementsOndemandRequestProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
