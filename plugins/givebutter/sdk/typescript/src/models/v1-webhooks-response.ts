import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksSchema, type Links } from "./links.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";
import { webhookResourceSchema, type WebhookResource } from "./webhook-resource.js";

export type V1WebhooksResponse = {
  data: WebhookResource[];
  links: Links;
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1WebhooksResponseProperties: s.Shape<V1WebhooksResponse> = {
  data: s.array(s.lazy(() => webhookResourceSchema)),
  links: linksSchema,
  meta: metaInternalSchema,
};

export const v1WebhooksResponseInternalSchema: Schema<V1WebhooksResponse> = s.object<V1WebhooksResponse>(
  v1WebhooksResponseProperties,
  { additionalProperties: s.json() },
);

export const v1WebhooksResponseSchema: Schema<V1WebhooksResponse> = s.lazySchema(() =>
  s.object<V1WebhooksResponse>(
    {
      ...v1WebhooksResponseProperties,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
