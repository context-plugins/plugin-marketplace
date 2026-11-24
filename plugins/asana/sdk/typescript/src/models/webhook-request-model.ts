import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterSchema, type Filter } from "./filter.js";

export type WebhookRequestModel = {
  /**
   * A resource ID to subscribe to. Many Asana resources are valid to create webhooks on, but
   * higher-level resources require filters.
   */
  resource: string;
  /**
   * The URL to receive the HTTP POST. The full URL will be used to deliver events from this webhook
   * (including parameters) which allows encoding of application-specific state when the webhook is
   * created.
   */
  target: string;
  /**
   * An array of WebhookFilter objects to specify a whitelist of filters to apply to events from
   * this webhook. If a webhook event passes any of the filters the event will be delivered;
   * otherwise no event will be sent to the receiving server.
   */
  filters?: Filter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookRequestModelProperties: s.Shape<WebhookRequestModel> = {
  resource: s.string(),
  target: s.string(),
  filters: s.optional(s.array(s.lazy(() => filterSchema))),
};

export const webhookRequestModelInternalSchema: Schema<WebhookRequestModel> = s.object<WebhookRequestModel>(
  webhookRequestModelProperties,
  { additionalProperties: s.json() },
);

export const webhookRequestModelSchema: Schema<WebhookRequestModel> = s.lazySchema(() =>
  s.object<WebhookRequestModel>(
    {
      ...webhookRequestModelProperties,
      target: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
