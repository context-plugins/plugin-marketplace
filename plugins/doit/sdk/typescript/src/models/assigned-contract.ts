import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A draft contract created from a contract template. */
export type AssignedContract = {
  /** Identifier of the customer the draft contract was created for. */
  customerId?: string;
  /** Identifier of the created draft contract. */
  contractId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const assignedContractSchema: Schema<AssignedContract> = s.object<AssignedContract>(
  {
    customerId: s.optional(s.string()),
    contractId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
