import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  chartOfAccountsTypeRequestSchema,
  type ChartOfAccountsTypeRequest,
} from "./chart-of-accounts-type-request.js";

/** Update account request Dto. */
export type UpdateAccountRequest = {
  type?: ChartOfAccountsTypeRequest;
  /** Number */
  number?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateAccountRequestSchema: Schema<UpdateAccountRequest> = s.object<UpdateAccountRequest>(
  {
    type: s.optional(s.lazy(() => chartOfAccountsTypeRequestSchema)),
    number: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
