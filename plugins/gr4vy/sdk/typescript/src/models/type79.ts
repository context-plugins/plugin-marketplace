import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of resource for webhook subscriptions. */
export const Type79 = {
  WebhookSubscription: "webhook-subscription",
} as const;
export type Type79 = (typeof Type79)[keyof typeof Type79] | (string & {});

export const type79Schema: EnumSchema<Type79> = s.enumOf<Type79>(Type79);
