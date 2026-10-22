import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Webhooks = {
  href?: string;
};

export const webhooksSchema: Schema<Webhooks> = s.object<Webhooks>({
  href: s.optional(s.string()),
});
