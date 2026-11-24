import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TransfersReversalsRequest = {
  /** Amount to reverse in paise. Omit to reverse the full remaining amount. */
  amount?: number;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transfersReversalsRequestProperties: s.Shape<TransfersReversalsRequest> = {
  amount: s.optional(s.int()),
  notes: s.optional(s.record(s.string(), s.string())),
};

export const transfersReversalsRequestInternalSchema: Schema<TransfersReversalsRequest> =
  s.object<TransfersReversalsRequest>(transfersReversalsRequestProperties, {
    additionalProperties: s.json(),
  });

export const transfersReversalsRequestSchema: Schema<TransfersReversalsRequest> = s.lazySchema(() =>
  s.object<TransfersReversalsRequest>(
    {
      ...transfersReversalsRequestProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
