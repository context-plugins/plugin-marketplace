import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookInfoInternalSchema, webhookInfoSchema, type WebhookInfo } from "./webhook-info.js";

export type WebhookList = {
  /** List of webhooks */
  items?: WebhookInfo[];
  /** Token for retrieving the next page */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookListProperties: s.Shape<WebhookList> = {
  items: s.optional(s.array(s.lazy(() => webhookInfoInternalSchema))),
  nextPageToken: s.optional(s.string()),
  _keysMap: {
    nextPageToken: "next_page_token",
  },
};

export const webhookListInternalSchema: Schema<WebhookList> = s.object<WebhookList>(webhookListProperties, {
  additionalProperties: s.json(),
});

export const webhookListSchema: Schema<WebhookList> = s.lazySchema(() =>
  s.object<WebhookList>(
    {
      ...webhookListProperties,
      items: s.optional(s.array(s.lazy(() => webhookInfoSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
