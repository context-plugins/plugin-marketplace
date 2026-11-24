import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  createSubscriptionErrorResultSchema,
  type CreateSubscriptionErrorResult,
} from "../create-subscription-error-result.js";
import {
  createSubscriptionSuccessResultInternalSchema,
  createSubscriptionSuccessResultSchema,
  type CreateSubscriptionSuccessResult,
} from "../create-subscription-success-result.js";

export type ResultLushaWebhooksApi = CreateSubscriptionSuccessResult | CreateSubscriptionErrorResult;

export const resultLushaWebhooksApiInternalSchema: Schema<ResultLushaWebhooksApi> =
  s.of<ResultLushaWebhooksApi>(
    s.union([
      s.lazy(() => createSubscriptionSuccessResultInternalSchema),
      s.lazy(() => createSubscriptionErrorResultSchema),
    ]),
  );

export const resultLushaWebhooksApiSchema: Schema<ResultLushaWebhooksApi> = s.lazySchema(() =>
  s.of<ResultLushaWebhooksApi>(
    s.union([
      s.lazy(() => createSubscriptionSuccessResultSchema),
      s.lazy(() => createSubscriptionErrorResultSchema),
    ]),
  ),
);
