import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomersContractsCancelRequest = {
  /** Optional cancellation reason. */
  reason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customersContractsCancelRequestSchema: Schema<CustomersContractsCancelRequest> =
  s.object<CustomersContractsCancelRequest>(
    {
      reason: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
