import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type WebhooksRequest = {
  /** The HTTPS URL to receive webhook payloads */
  url: string;
  /** Events to subscribe to */
  events: Event[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhooksRequestProperties: s.Shape<WebhooksRequest> = {
  url: s.string(),
  events: s.array(s.lazy(() => eventSchema)),
};

export const webhooksRequestInternalSchema: Schema<WebhooksRequest> = s.object<WebhooksRequest>(
  webhooksRequestProperties,
  { additionalProperties: s.json() },
);

export const webhooksRequestSchema: Schema<WebhooksRequest> = s.lazySchema(() =>
  s.object<WebhooksRequest>(
    {
      ...webhooksRequestProperties,
      url: s.string().check(s.maxLength(500), s.url()),
      events: s.array(s.lazy(() => eventSchema)).check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
