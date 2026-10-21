import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attemptSchema, type Attempt } from "./attempt.js";
import { links12Schema, type Links12 } from "./links12.js";

export type Webhook = {
  links?: Links12;
  id?: string;
  topic?: string;
  accountId?: string;
  eventId?: string;
  subscriptionId?: string;
  attempts?: Attempt[];
};

export const webhookSchema: Schema<Webhook> = s.object<Webhook>({
  links: s.optional(s.lazy(() => links12Schema)),
  id: s.optional(s.string()),
  topic: s.optional(s.string()),
  accountId: s.optional(s.string()),
  eventId: s.optional(s.string()),
  subscriptionId: s.optional(s.string()),
  attempts: s.optional(s.array(s.lazy(() => attemptSchema))),
  _keysMap: {
    links: "_links",
  },
});
