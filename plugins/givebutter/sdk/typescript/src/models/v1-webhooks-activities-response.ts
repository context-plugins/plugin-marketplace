import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksSchema, type Links } from "./links.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";
import { webhookActivityResourceSchema, type WebhookActivityResource } from "./webhook-activity-resource.js";

export type V1WebhooksActivitiesResponse = {
  data: WebhookActivityResource[];
  links: Links;
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1WebhooksActivitiesResponseProperties: s.Shape<V1WebhooksActivitiesResponse> = {
  data: s.array(s.lazy(() => webhookActivityResourceSchema)),
  links: linksSchema,
  meta: metaInternalSchema,
};

export const v1WebhooksActivitiesResponseInternalSchema: Schema<V1WebhooksActivitiesResponse> =
  s.object<V1WebhooksActivitiesResponse>(v1WebhooksActivitiesResponseProperties, {
    additionalProperties: s.json(),
  });

export const v1WebhooksActivitiesResponseSchema: Schema<V1WebhooksActivitiesResponse> = s.lazySchema(() =>
  s.object<V1WebhooksActivitiesResponse>(
    {
      ...v1WebhooksActivitiesResponseProperties,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
