import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1RazorpayPartnerAccountsApiSchema,
  type Status1RazorpayPartnerAccountsApi,
} from "./status1-razorpay-partner-accounts-api.js";

export type V2AccountsResponse = {
  id?: string;
  status?: Status1RazorpayPartnerAccountsApi;
  suspendedAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v2AccountsResponseSchema: Schema<V2AccountsResponse> = s.object<V2AccountsResponse>(
  {
    id: s.optional(s.string()),
    status: s.optional(s.lazy(() => status1RazorpayPartnerAccountsApiSchema)),
    suspendedAt: s.optional(s.int()),
    _keysMap: {
      suspendedAt: "suspended_at",
    },
  },
  { additionalProperties: s.json() },
);
