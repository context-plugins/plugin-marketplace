import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { assignedContractSchema, type AssignedContract } from "./assigned-contract.js";

/** The draft contracts created by applying a contract template. */
export type AssignContractTemplateResponse = {
  /** Number of draft contracts created. */
  count?: number;
  /** One entry per created draft contract, in the order the customers were supplied. */
  createdContracts?: AssignedContract[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const assignContractTemplateResponseSchema: Schema<AssignContractTemplateResponse> =
  s.object<AssignContractTemplateResponse>(
    {
      count: s.optional(s.int()),
      createdContracts: s.optional(s.array(s.lazy(() => assignedContractSchema))),
    },
    { additionalProperties: s.json() },
  );
