import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  chartOfAccountsTypeResponseSchema,
  type ChartOfAccountsTypeResponse,
} from "./chart-of-accounts-type-response.js";

export type Account = {
  type?: ChartOfAccountsTypeResponse;
  /** Number */
  number?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountSchema: Schema<Account> = s.object<Account>(
  {
    type: s.optional(s.lazy(() => chartOfAccountsTypeResponseSchema)),
    number: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
