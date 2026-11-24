import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  deleteSubscriptionErrorResultSchema,
  type DeleteSubscriptionErrorResult,
} from "../delete-subscription-error-result.js";
import {
  deleteSubscriptionSuccessResultSchema,
  type DeleteSubscriptionSuccessResult,
} from "../delete-subscription-success-result.js";

export type Result1LushaWebhooksApi = DeleteSubscriptionSuccessResult | DeleteSubscriptionErrorResult;

export const result1LushaWebhooksApiSchema: Schema<Result1LushaWebhooksApi> = s.of<Result1LushaWebhooksApi>(
  s.union([
    s.lazy(() => deleteSubscriptionSuccessResultSchema),
    s.lazy(() => deleteSubscriptionErrorResultSchema),
  ]),
);
