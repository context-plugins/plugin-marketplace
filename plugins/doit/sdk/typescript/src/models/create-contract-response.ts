import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The result of creating a contract or contract version. */
export type CreateContractResponse = {
  contractId?: string;
  version?: number;
  status?: string;
  message?: string;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createContractResponseSchema: Schema<CreateContractResponse> = s.object<CreateContractResponse>(
  {
    contractId: s.optional(s.string()),
    version: s.optional(s.int()),
    status: s.optional(s.string()),
    message: s.optional(s.string()),
    timestamp: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
