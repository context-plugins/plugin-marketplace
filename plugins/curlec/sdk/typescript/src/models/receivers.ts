import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeRazorpayVirtualAccountsApiSchema,
  type TypeRazorpayVirtualAccountsApi,
} from "./type-razorpay-virtual-accounts-api.js";

export type Receivers = {
  /**
   * Receiver types. bank_account creates a virtual bank account. vpa creates a UPI VPA (Smart
   * Collect 2.0, requires feature flag).
   */
  types: TypeRazorpayVirtualAccountsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const receiversSchema: Schema<Receivers> = s.object<Receivers>(
  {
    types: s.array(s.lazy(() => typeRazorpayVirtualAccountsApiSchema)),
  },
  { additionalProperties: s.json() },
);
