import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SharedPayerAccountReassignResult = {
  /** Asset ID of the reassigned account. */
  assetId?: string;
  /** Customer the account was reassigned to. */
  customerId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sharedPayerAccountReassignResultSchema: Schema<SharedPayerAccountReassignResult> =
  s.object<SharedPayerAccountReassignResult>(
    {
      assetId: s.optional(s.string()),
      customerId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
