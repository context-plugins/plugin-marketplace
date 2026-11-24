import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type1RazorpayVirtualAccountsApiSchema,
  type Type1RazorpayVirtualAccountsApi,
} from "./type1-razorpay-virtual-accounts-api.js";

export type VirtualAccountsReceiversRequest = {
  /** Must contain 'vpa'. */
  types: Type1RazorpayVirtualAccountsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const virtualAccountsReceiversRequestSchema: Schema<VirtualAccountsReceiversRequest> =
  s.object<VirtualAccountsReceiversRequest>(
    {
      types: s.array(s.lazy(() => type1RazorpayVirtualAccountsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
