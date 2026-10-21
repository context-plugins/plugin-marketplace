import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links11Schema, type Links11 } from "./links11.js";

export type WebhookSubscription = {
  links?: Links11;
  id?: string;
  url?: string;
  paused?: boolean;
  created?: Date;
};

export const webhookSubscriptionSchema: Schema<WebhookSubscription> = s.object<WebhookSubscription>({
  links: s.optional(s.lazy(() => links11Schema)),
  id: s.optional(s.string()),
  url: s.optional(s.string()),
  paused: s.optional(s.boolean()),
  created: s.optional(s.dateTime()),
  _keysMap: {
    links: "_links",
  },
});
