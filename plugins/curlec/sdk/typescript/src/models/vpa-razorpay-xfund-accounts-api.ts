import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VpaRazorpayXFundAccountsApi = {
  username?: string;
  handle?: string;
  address?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vpaRazorpayXFundAccountsApiSchema: Schema<VpaRazorpayXFundAccountsApi> =
  s.object<VpaRazorpayXFundAccountsApi>(
    {
      username: s.optional(s.string()),
      handle: s.optional(s.string()),
      address: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
