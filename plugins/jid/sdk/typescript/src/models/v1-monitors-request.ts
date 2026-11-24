import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1MonitorsRequest = {
  entityId: string;
  webhookUrl?: string;
  email?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1MonitorsRequestProperties: s.Shape<V1MonitorsRequest> = {
  entityId: s.string(),
  webhookUrl: s.optional(s.string()),
  email: s.optional(s.string()),
  _keysMap: {
    entityId: "entity_id",
    webhookUrl: "webhook_url",
  },
};

export const v1MonitorsRequestInternalSchema: Schema<V1MonitorsRequest> = s.object<V1MonitorsRequest>(
  v1MonitorsRequestProperties,
  { additionalProperties: s.json() },
);

export const v1MonitorsRequestSchema: Schema<V1MonitorsRequest> = s.lazySchema(() =>
  s.object<V1MonitorsRequest>(
    {
      ...v1MonitorsRequestProperties,
      webhookUrl: s.optional(s.string().check(s.pattern("^https://"), s.url())),
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
