import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookEventFilterSchema, type WebhookEventFilter } from "./webhook-event-filter.js";

export type V1WebhooksRequest = {
  /** Your endpoint. Must start with `https://`. */
  url: string;
  /** Event types to receive, or `["*"]` for all of them (the default). */
  events?: WebhookEventFilter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1WebhooksRequestProperties: s.Shape<V1WebhooksRequest> = {
  url: s.string(),
  events: s.optional(s.array(s.lazy(() => webhookEventFilterSchema))),
};

export const v1WebhooksRequestInternalSchema: Schema<V1WebhooksRequest> = s.object<V1WebhooksRequest>(
  v1WebhooksRequestProperties,
  { additionalProperties: s.json() },
);

export const v1WebhooksRequestSchema: Schema<V1WebhooksRequest> = s.lazySchema(() =>
  s.object<V1WebhooksRequest>(
    {
      ...v1WebhooksRequestProperties,
      url: s.string().check(s.pattern("^https://"), s.url()),
      events: s.optional(s.array(s.lazy(() => webhookEventFilterSchema)).check(s.minLength(1))),
    },
    { additionalProperties: s.json() },
  ),
);
