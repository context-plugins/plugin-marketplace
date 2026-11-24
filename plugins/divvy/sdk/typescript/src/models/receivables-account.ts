import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  receivableFundingAccountTypeResponseSchema,
  type ReceivableFundingAccountTypeResponse,
} from "./receivable-funding-account-type-response.js";

/** Disbursement Account object. */
export type ReceivablesAccount = {
  /** BILL-generated ID of the received payment funding account */
  id?: string;
  type?: ReceivableFundingAccountTypeResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const receivablesAccountSchema: Schema<ReceivablesAccount> = s.object<ReceivablesAccount>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => receivableFundingAccountTypeResponseSchema)),
  },
  { additionalProperties: s.json() },
);
