import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { webhookSchema, type Webhook } from "./webhook.js";

export type Embedded97 = {
  webhooks?: Webhook[];
};

export const embedded97Schema: Schema<Embedded97> = s.object<Embedded97>({
  webhooks: s.optional(s.array(s.lazy(() => webhookSchema))),
});
