import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  actionBundleSocialCreditApiSchema,
  type ActionBundleSocialCreditApi,
} from "./action-bundle-social-credit-api.js";

export type ApiV1BillingBillableUsageQuoteRequest = {
  teamId: string;
  text?: string;
  texts?: string[];
  action?: ActionBundleSocialCreditApi;
  altTextCount?: number;
  /** @default 1 */
  quantity?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1BillingBillableUsageQuoteRequestProperties: s.Shape<ApiV1BillingBillableUsageQuoteRequest> = {
  teamId: s.string(),
  text: s.optional(s.string()),
  texts: s.optional(s.array(s.string())),
  action: s.optional(s.lazy(() => actionBundleSocialCreditApiSchema)),
  altTextCount: s.optional(s.int()),
  quantity: s.defaulted(s.int(), 1),
};

export const apiV1BillingBillableUsageQuoteRequestInternalSchema: Schema<ApiV1BillingBillableUsageQuoteRequest> =
  s.object<ApiV1BillingBillableUsageQuoteRequest>(apiV1BillingBillableUsageQuoteRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1BillingBillableUsageQuoteRequestSchema: Schema<ApiV1BillingBillableUsageQuoteRequest> =
  s.lazySchema(() =>
    s.object<ApiV1BillingBillableUsageQuoteRequest>(
      {
        ...apiV1BillingBillableUsageQuoteRequestProperties,
        teamId: s.string().check(s.minLength(1)),
        altTextCount: s.optional(s.int().check(s.gte(0))),
        quantity: s.defaulted(s.int().check(s.gte(1)), 1),
      },
      { additionalProperties: s.json() },
    ),
  );
