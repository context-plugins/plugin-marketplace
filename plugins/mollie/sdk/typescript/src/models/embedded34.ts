import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listSubscriptionResponseSchema,
  type ListSubscriptionResponse,
} from "./list-subscription-response.js";

export type Embedded34 = {
  /** An array of subscription objects. */
  subscriptions?: ListSubscriptionResponse[];
};

export const embedded34Schema: Schema<Embedded34> = s.object<Embedded34>({
  subscriptions: s.optional(s.array(s.lazy(() => listSubscriptionResponseSchema))),
});
