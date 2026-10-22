import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded91Schema, type Embedded91 } from "./embedded91.js";
import { links9Schema, type Links9 } from "./links9.js";

export type WebhookRetries = {
  links?: Links9;
  embedded?: Embedded91;
  total?: number;
};

export const webhookRetriesSchema: Schema<WebhookRetries> = s.object<WebhookRetries>({
  links: s.optional(s.lazy(() => links9Schema)),
  embedded: s.optional(s.lazy(() => embedded91Schema)),
  total: s.optional(s.int()),
  _keysMap: {
    links: "_links",
    embedded: "_embedded",
  },
});
