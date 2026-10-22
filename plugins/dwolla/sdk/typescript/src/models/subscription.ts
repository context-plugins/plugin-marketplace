import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Subscription = {
  href?: string;
};

export const subscriptionSchema: Schema<Subscription> = s.object<Subscription>({
  href: s.optional(s.string()),
});
