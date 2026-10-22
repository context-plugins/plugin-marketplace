import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Webhook1 = {
  href?: string;
};

export const webhook1Schema: Schema<Webhook1> = s.object<Webhook1>({
  href: s.optional(s.string()),
});
