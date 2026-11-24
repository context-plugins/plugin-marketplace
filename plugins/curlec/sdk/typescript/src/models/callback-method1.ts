import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required when callback_url is set. */
export const CallbackMethod1 = {
  Get: "get",
} as const;
export type CallbackMethod1 = (typeof CallbackMethod1)[keyof typeof CallbackMethod1] | (string & {});

export const callbackMethod1Schema: EnumSchema<CallbackMethod1> = s.enumOf<CallbackMethod1>(CallbackMethod1);
