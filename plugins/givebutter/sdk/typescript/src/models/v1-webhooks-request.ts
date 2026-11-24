import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type V1WebhooksRequest = {
  url: string;
  event?: Event;
  events?: Event[];
  name?: string | null;
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1WebhooksRequestProperties: s.Shape<V1WebhooksRequest> = {
  url: s.string(),
  event: s.optional(s.lazy(() => eventSchema)),
  events: s.optional(s.array(s.lazy(() => eventSchema))),
  name: s.optionalNullable(s.string()),
  enabled: s.optional(s.boolean()),
};

export const v1WebhooksRequestInternalSchema: Schema<V1WebhooksRequest> = s.object<V1WebhooksRequest>(
  v1WebhooksRequestProperties,
  { additionalProperties: s.json() },
);

export const v1WebhooksRequestSchema: Schema<V1WebhooksRequest> = s.lazySchema(() =>
  s.object<V1WebhooksRequest>(
    {
      ...v1WebhooksRequestProperties,
      url: s.string().check(s.url()),
      name: s.optionalNullable(s.string().check(s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
