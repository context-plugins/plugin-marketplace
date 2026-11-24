import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  webhookRequestModelInternalSchema,
  webhookRequestModelSchema,
  type WebhookRequestModel,
} from "./webhook-request-model.js";

export type WebhooksRequest = {
  data?: WebhookRequestModel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhooksRequestProperties: s.Shape<WebhooksRequest> = {
  data: s.optional(s.lazy(() => webhookRequestModelInternalSchema)),
};

export const webhooksRequestInternalSchema: Schema<WebhooksRequest> = s.object<WebhooksRequest>(
  webhooksRequestProperties,
  { additionalProperties: s.json() },
);

export const webhooksRequestSchema: Schema<WebhooksRequest> = s.lazySchema(() =>
  s.object<WebhooksRequest>(
    {
      ...webhooksRequestProperties,
      data: s.optional(s.lazy(() => webhookRequestModelSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
