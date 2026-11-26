import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  chartOfAccountsTypeRequestSchema,
  type ChartOfAccountsTypeRequest,
} from "./chart-of-accounts-type-request.js";

export type Account1 = {
  type: ChartOfAccountsTypeRequest;
  /** Number */
  number?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const account1Schema: Schema<Account1> = s.object<Account1>(
  {
    type: chartOfAccountsTypeRequestSchema,
    number: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
