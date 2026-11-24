import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Transfer = {
  /** Linked account ID. */
  account?: string;
  amount?: number;
  currency?: string;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transferProperties: s.Shape<Transfer> = {
  account: s.optional(s.string()),
  amount: s.optional(s.int()),
  currency: s.optional(s.string()),
  notes: s.optional(s.record(s.string(), s.string())),
};

export const transferInternalSchema: Schema<Transfer> = s.object<Transfer>(transferProperties, {
  additionalProperties: s.json(),
});

export const transferSchema: Schema<Transfer> = s.lazySchema(() =>
  s.object<Transfer>(
    {
      ...transferProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
