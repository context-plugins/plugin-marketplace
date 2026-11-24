import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type WebhooksRequest1 = {
  url?: string;
  events?: Event[];
  isActive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhooksRequest1Properties: s.Shape<WebhooksRequest1> = {
  url: s.optional(s.string()),
  events: s.optional(s.array(s.lazy(() => eventSchema))),
  isActive: s.optional(s.boolean()),
  _keysMap: {
    isActive: "is_active",
  },
};

export const webhooksRequest1InternalSchema: Schema<WebhooksRequest1> = s.object<WebhooksRequest1>(
  webhooksRequest1Properties,
  { additionalProperties: s.json() },
);

export const webhooksRequest1Schema: Schema<WebhooksRequest1> = s.lazySchema(() =>
  s.object<WebhooksRequest1>(
    {
      ...webhooksRequest1Properties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
