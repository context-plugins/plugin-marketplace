import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CallbackMethod = {
  Get: "get",
} as const;
export type CallbackMethod = (typeof CallbackMethod)[keyof typeof CallbackMethod] | (string & {});

export const callbackMethodSchema: EnumSchema<CallbackMethod> = s.enumOf<CallbackMethod>(CallbackMethod);
