import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  chartOfAccountsTypeRequestSchema,
  type ChartOfAccountsTypeRequest,
} from "./chart-of-accounts-type-request.js";

/** Account request Dto. */
export type CreateAccountRequest = {
  type: ChartOfAccountsTypeRequest;
  /** Number */
  number?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createAccountRequestSchema: Schema<CreateAccountRequest> = s.object<CreateAccountRequest>(
  {
    type: chartOfAccountsTypeRequestSchema,
    number: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
