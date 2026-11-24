import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { headerSchema, type Header } from "./header.js";

export type WebhookUpdate = {
  header?: Header;
  /** Unique webhook ID, assigned by Tabby. */
  id: string;
  /** HTTPS endpoint for notifications. The URL should be valid and accessible (not local). */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookUpdateProperties: s.Shape<WebhookUpdate> = {
  header: s.optional(s.lazy(() => headerSchema)),
  id: s.string(),
  url: s.string(),
};

export const webhookUpdateInternalSchema: Schema<WebhookUpdate> = s.object<WebhookUpdate>(
  webhookUpdateProperties,
  { additionalProperties: s.json() },
);

export const webhookUpdateSchema: Schema<WebhookUpdate> = s.lazySchema(() =>
  s.object<WebhookUpdate>(
    {
      ...webhookUpdateProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
