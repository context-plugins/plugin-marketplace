import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationResponseSchema, type PaginationResponse } from "./pagination-response.js";
import {
  subscriptionWithoutSecretInternalSchema,
  subscriptionWithoutSecretSchema,
  type SubscriptionWithoutSecret,
} from "./subscription-without-secret.js";

export type SubscriptionListResponse = {
  data: SubscriptionWithoutSecret[];
  pagination: PaginationResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionListResponseProperties: s.Shape<SubscriptionListResponse> = {
  data: s.array(s.lazy(() => subscriptionWithoutSecretInternalSchema)),
  pagination: paginationResponseSchema,
};

export const subscriptionListResponseInternalSchema: Schema<SubscriptionListResponse> =
  s.object<SubscriptionListResponse>(subscriptionListResponseProperties, { additionalProperties: s.json() });

export const subscriptionListResponseSchema: Schema<SubscriptionListResponse> = s.lazySchema(() =>
  s.object<SubscriptionListResponse>(
    {
      ...subscriptionListResponseProperties,
      data: s.array(s.lazy(() => subscriptionWithoutSecretSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
