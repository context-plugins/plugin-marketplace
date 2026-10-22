import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded96Schema, type Embedded96 } from "./embedded96.js";
import { links9Schema, type Links9 } from "./links9.js";

export type WebhookSubscriptionsResponse = {
  links?: Links9;
  embedded?: Embedded96;
  total?: number;
};

export const webhookSubscriptionsResponseSchema: Schema<WebhookSubscriptionsResponse> =
  s.object<WebhookSubscriptionsResponse>({
    links: s.optional(s.lazy(() => links9Schema)),
    embedded: s.optional(s.lazy(() => embedded96Schema)),
    total: s.optional(s.int()),
    _keysMap: {
      links: "_links",
      embedded: "_embedded",
    },
  });
