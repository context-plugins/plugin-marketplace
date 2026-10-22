import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded97Schema, type Embedded97 } from "./embedded97.js";
import { links41Schema, type Links41 } from "./links41.js";

export type WebhookSubscriptionsWebhooksResponse = {
  links?: Links41;
  embedded?: Embedded97;
  total?: number;
};

export const webhookSubscriptionsWebhooksResponseSchema: Schema<WebhookSubscriptionsWebhooksResponse> =
  s.object<WebhookSubscriptionsWebhooksResponse>({
    links: s.optional(s.lazy(() => links41Schema)),
    embedded: s.optional(s.lazy(() => embedded97Schema)),
    total: s.optional(s.int()),
    _keysMap: {
      links: "_links",
      embedded: "_embedded",
    },
  });
