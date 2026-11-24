import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  chartOfAccountsTypeRequestSchema,
  type ChartOfAccountsTypeRequest,
} from "./chart-of-accounts-type-request.js";

export type Account2 = {
  type?: ChartOfAccountsTypeRequest;
  /** Number */
  number?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const account2Schema: Schema<Account2> = s.object<Account2>(
  {
    type: s.optional(s.lazy(() => chartOfAccountsTypeRequestSchema)),
    number: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
