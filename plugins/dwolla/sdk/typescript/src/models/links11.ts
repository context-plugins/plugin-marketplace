import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { selfSchema, type Self } from "./self.js";
import { webhooksSchema, type Webhooks } from "./webhooks.js";

export type Links11 = {
  self?: Self;
  webhooks?: Webhooks;
};

export const links11Schema: Schema<Links11> = s.object<Links11>({
  self: s.optional(s.lazy(() => selfSchema)),
  webhooks: s.optional(s.lazy(() => webhooksSchema)),
});
