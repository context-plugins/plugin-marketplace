import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksWebhooksApiSchema, type LinksWebhooksApi } from "./links-webhooks-api.js";
import { statusWebhooksApiSchema, type StatusWebhooksApi } from "./status-webhooks-api.js";

export type NotificationsWebhooksResponse = {
  /** unique identifer in the form of uuid for the webhook. */
  id?: string;
  type?: string;
  /** name to describe the webhook. */
  name?: string;
  /** detailed description of the webhook. */
  description?: string;
  /** url to send webhooks to. */
  url: string;
  /** status of the webhook. */
  status: StatusWebhooksApi;
  /** secret for signing the messages. */
  secret?: string;
  links?: LinksWebhooksApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationsWebhooksResponseSchema: Schema<NotificationsWebhooksResponse> =
  s.object<NotificationsWebhooksResponse>(
    {
      id: s.optional(s.string()),
      type: s.optional(s.string()),
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      url: s.string(),
      status: statusWebhooksApiSchema,
      secret: s.optional(s.string()),
      links: s.optional(s.lazy(() => linksWebhooksApiSchema)),
    },
    { additionalProperties: s.json() },
  );
