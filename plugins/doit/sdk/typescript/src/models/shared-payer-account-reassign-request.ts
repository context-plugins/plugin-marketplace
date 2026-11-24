import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SharedPayerAccountReassignRequest = {
  /**
   * Customer to reassign the account to: `{customerId}` (the reseller itself) or a T3 end customer
   * within its hierarchy.
   */
  customerId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sharedPayerAccountReassignRequestSchema: Schema<SharedPayerAccountReassignRequest> =
  s.object<SharedPayerAccountReassignRequest>(
    {
      customerId: s.string(),
    },
    { additionalProperties: s.json() },
  );
