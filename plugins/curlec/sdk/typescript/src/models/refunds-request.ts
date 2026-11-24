import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RefundsRequest = {
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const refundsRequestProperties: s.Shape<RefundsRequest> = {
  notes: s.record(s.string(), s.string()),
};

export const refundsRequestInternalSchema: Schema<RefundsRequest> = s.object<RefundsRequest>(
  refundsRequestProperties,
  { additionalProperties: s.json() },
);

export const refundsRequestSchema: Schema<RefundsRequest> = s.lazySchema(() =>
  s.object<RefundsRequest>(
    {
      ...refundsRequestProperties,
      notes: s.record(s.string(), s.string()).check(s.maxProperties(15)),
    },
    { additionalProperties: s.json() },
  ),
);
