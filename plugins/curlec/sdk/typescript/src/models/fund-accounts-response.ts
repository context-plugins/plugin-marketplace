import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity1RazorpayDisputesApiSchema,
  type Entity1RazorpayDisputesApi,
} from "./entity1-razorpay-disputes-api.js";
import {
  fundAccountRazorpayXFundAccountsApiInternalSchema,
  fundAccountRazorpayXFundAccountsApiSchema,
  type FundAccountRazorpayXFundAccountsApi,
} from "./fund-account-razorpay-xfund-accounts-api.js";

export type FundAccountsResponse = {
  entity?: Entity1RazorpayDisputesApi;
  count?: number;
  items?: FundAccountRazorpayXFundAccountsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const fundAccountsResponseProperties: s.Shape<FundAccountsResponse> = {
  entity: s.optional(s.lazy(() => entity1RazorpayDisputesApiSchema)),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => fundAccountRazorpayXFundAccountsApiInternalSchema))),
};

export const fundAccountsResponseInternalSchema: Schema<FundAccountsResponse> =
  s.object<FundAccountsResponse>(fundAccountsResponseProperties, { additionalProperties: s.json() });

export const fundAccountsResponseSchema: Schema<FundAccountsResponse> = s.lazySchema(() =>
  s.object<FundAccountsResponse>(
    {
      ...fundAccountsResponseProperties,
      items: s.optional(s.array(s.lazy(() => fundAccountRazorpayXFundAccountsApiSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
