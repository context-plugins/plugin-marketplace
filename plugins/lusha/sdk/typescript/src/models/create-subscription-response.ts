import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resultLushaWebhooksApiInternalSchema,
  resultLushaWebhooksApiSchema,
  type ResultLushaWebhooksApi,
} from "./unions/result-lusha-webhooks-api.js";

export type CreateSubscriptionResponse = {
  total: number;
  successful: number;
  failed: number;
  results: ResultLushaWebhooksApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createSubscriptionResponseProperties: s.Shape<CreateSubscriptionResponse> = {
  total: s.int(),
  successful: s.int(),
  failed: s.int(),
  results: s.array(s.lazy(() => resultLushaWebhooksApiInternalSchema)),
};

export const createSubscriptionResponseInternalSchema: Schema<CreateSubscriptionResponse> =
  s.object<CreateSubscriptionResponse>(createSubscriptionResponseProperties, {
    additionalProperties: s.json(),
  });

export const createSubscriptionResponseSchema: Schema<CreateSubscriptionResponse> = s.lazySchema(() =>
  s.object<CreateSubscriptionResponse>(
    {
      ...createSubscriptionResponseProperties,
      results: s.array(s.lazy(() => resultLushaWebhooksApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
