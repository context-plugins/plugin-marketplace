import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type V1WebhooksRequest1 = {
  url: string;
  events: Event[];
  name?: string | null;
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1WebhooksRequest1Properties: s.Shape<V1WebhooksRequest1> = {
  url: s.string(),
  events: s.array(s.lazy(() => eventSchema)),
  name: s.optionalNullable(s.string()),
  enabled: s.optional(s.boolean()),
};

export const v1WebhooksRequest1InternalSchema: Schema<V1WebhooksRequest1> = s.object<V1WebhooksRequest1>(
  v1WebhooksRequest1Properties,
  { additionalProperties: s.json() },
);

export const v1WebhooksRequest1Schema: Schema<V1WebhooksRequest1> = s.lazySchema(() =>
  s.object<V1WebhooksRequest1>(
    {
      ...v1WebhooksRequest1Properties,
      url: s.string().check(s.url()),
      events: s.array(s.lazy(() => eventSchema)).check(s.minLength(1)),
      name: s.optionalNullable(s.string().check(s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
