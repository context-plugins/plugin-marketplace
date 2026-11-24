import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum31Schema, type Datum31 } from "./datum31.js";
import { linksWebhooksApiSchema, type LinksWebhooksApi } from "./links-webhooks-api.js";

export type NotificationsWebhooksMessagesResponse = {
  type?: string;
  count?: number;
  size?: number;
  data?: Datum31[];
  links?: LinksWebhooksApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationsWebhooksMessagesResponseSchema: Schema<NotificationsWebhooksMessagesResponse> =
  s.object<NotificationsWebhooksMessagesResponse>(
    {
      type: s.optional(s.string()),
      count: s.optional(s.int()),
      size: s.optional(s.int()),
      data: s.optional(s.array(s.lazy(() => datum31Schema))),
      links: s.optional(s.lazy(() => linksWebhooksApiSchema)),
    },
    { additionalProperties: s.json() },
  );
