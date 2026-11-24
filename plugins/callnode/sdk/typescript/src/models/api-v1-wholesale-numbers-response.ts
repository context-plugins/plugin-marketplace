import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billingCallnodeIoWholesaleApiSchema,
  type BillingCallnodeIoWholesaleApi,
} from "./billing-callnode-io-wholesale-api.js";
import { numberInternalSchema, numberSchema, type Number } from "./number.js";
import {
  walletCallnodeIoWholesaleApiSchema,
  type WalletCallnodeIoWholesaleApi,
} from "./wallet-callnode-io-wholesale-api.js";

export type ApiV1WholesaleNumbersResponse = {
  number?: Number;
  /** First month */
  charged?: number;
  monthlyRate?: number;
  wallet?: WalletCallnodeIoWholesaleApi;
  billing?: BillingCallnodeIoWholesaleApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1WholesaleNumbersResponseProperties: s.Shape<ApiV1WholesaleNumbersResponse> = {
  number: s.optional(s.lazy(() => numberInternalSchema)),
  charged: s.optional(s.float64()),
  monthlyRate: s.optional(s.float64()),
  wallet: s.optional(s.lazy(() => walletCallnodeIoWholesaleApiSchema)),
  billing: s.optional(s.lazy(() => billingCallnodeIoWholesaleApiSchema)),
};

export const apiV1WholesaleNumbersResponseInternalSchema: Schema<ApiV1WholesaleNumbersResponse> =
  s.object<ApiV1WholesaleNumbersResponse>(apiV1WholesaleNumbersResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1WholesaleNumbersResponseSchema: Schema<ApiV1WholesaleNumbersResponse> = s.lazySchema(() =>
  s.object<ApiV1WholesaleNumbersResponse>(
    {
      ...apiV1WholesaleNumbersResponseProperties,
      number: s.optional(s.lazy(() => numberSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
