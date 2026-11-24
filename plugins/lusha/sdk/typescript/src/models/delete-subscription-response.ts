import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  result1LushaWebhooksApiSchema,
  type Result1LushaWebhooksApi,
} from "./unions/result1-lusha-webhooks-api.js";

export type DeleteSubscriptionResponse = {
  total: number;
  successful: number;
  failed: number;
  results: Result1LushaWebhooksApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteSubscriptionResponseSchema: Schema<DeleteSubscriptionResponse> =
  s.object<DeleteSubscriptionResponse>(
    {
      total: s.int(),
      successful: s.int(),
      failed: s.int(),
      results: s.array(s.lazy(() => result1LushaWebhooksApiSchema)),
    },
    { additionalProperties: s.json() },
  );
