import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { webhookSchema, type Webhook } from "./webhook.js";

export type Webhooks = {
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** An array of webhooks */
  items: Webhook[];
};

export const webhooksSchema: Schema<Webhooks> = s.object<Webhooks>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  items: s.array(s.lazy(() => webhookSchema)),
  _keysMap: {
    links: "_links",
  },
});
