import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listEntityWebhookSchema, type ListEntityWebhook } from "./list-entity-webhook.js";

export type Embedded15 = {
  /** A list of webhooks. */
  webhooks: ListEntityWebhook[];
};

export const embedded15Schema: Schema<Embedded15> = s.object<Embedded15>({
  webhooks: s.array(s.lazy(() => listEntityWebhookSchema)),
});
