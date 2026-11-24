import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum7Schema, type Datum7 } from "./datum7.js";
import { linksWebhooksApiSchema, type LinksWebhooksApi } from "./links-webhooks-api.js";

export type NotificationsWebhooksResponse1 = {
  type?: string;
  count?: number;
  size?: number;
  data?: Datum7[];
  links?: LinksWebhooksApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationsWebhooksResponse1Schema: Schema<NotificationsWebhooksResponse1> =
  s.object<NotificationsWebhooksResponse1>(
    {
      type: s.optional(s.string()),
      count: s.optional(s.int()),
      size: s.optional(s.int()),
      data: s.optional(s.array(s.lazy(() => datum7Schema))),
      links: s.optional(s.lazy(() => linksWebhooksApiSchema)),
    },
    { additionalProperties: s.json() },
  );
