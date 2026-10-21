import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { event1Schema, type Event1 } from "./event1.js";
import { retrySchema, type Retry } from "./retry.js";
import { selfSchema, type Self } from "./self.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

export type Links12 = {
  self?: Self;
  subscription?: Subscription;
  retry?: Retry;
  event?: Event1;
};

export const links12Schema: Schema<Links12> = s.object<Links12>({
  self: s.optional(s.lazy(() => selfSchema)),
  subscription: s.optional(s.lazy(() => subscriptionSchema)),
  retry: s.optional(s.lazy(() => retrySchema)),
  event: s.optional(s.lazy(() => event1Schema)),
});
