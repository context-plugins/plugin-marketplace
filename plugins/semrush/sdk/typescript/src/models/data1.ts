import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

/** An object describes all app subscriptions */
export type Data1 = {
  /** app subscriptions */
  subscriptions?: Subscription[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1Schema: Schema<Data1> = s.object<Data1>(
  {
    subscriptions: s.optional(s.array(s.lazy(() => subscriptionSchema))),
  },
  { additionalProperties: s.json() },
);
