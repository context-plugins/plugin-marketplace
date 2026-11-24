import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusDoiTContractsApiSchema, type StatusDoiTContractsApi } from "./status-doi-tcontracts-api.js";

/** Result of an activate or cancel operation. */
export type ContractLifecycleResponse = {
  /** The contract identifier. */
  contractId?: string;
  /** The contract status after the operation (`active`, `scheduled`, or `cancelled`). */
  status?: StatusDoiTContractsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contractLifecycleResponseSchema: Schema<ContractLifecycleResponse> =
  s.object<ContractLifecycleResponse>(
    {
      contractId: s.optional(s.string()),
      status: s.optional(s.lazy(() => statusDoiTContractsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
