import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  chartOfAccountsTypeResponseSchema,
  type ChartOfAccountsTypeResponse,
} from "./chart-of-accounts-type-response.js";

/** Account response Dto. */
export type AccountResponse = {
  type?: ChartOfAccountsTypeResponse;
  /** Number */
  number?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountResponseSchema: Schema<AccountResponse> = s.object<AccountResponse>(
  {
    type: s.optional(s.lazy(() => chartOfAccountsTypeResponseSchema)),
    number: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
