import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listSubscriptionResponseSchema,
  type ListSubscriptionResponse,
} from "./list-subscription-response.js";

export type Embedded35 = {
  /** A list of subscription objects. */
  subscriptions?: ListSubscriptionResponse[];
};

export const embedded35Schema: Schema<Embedded35> = s.object<Embedded35>({
  subscriptions: s.optional(s.array(s.lazy(() => listSubscriptionResponseSchema))),
});
