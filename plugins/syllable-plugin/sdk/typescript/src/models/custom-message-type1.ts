import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of the custom message: greeting (voice) or email_template. */
export const CustomMessageType1 = {
  Greeting: "greeting",
  EmailTemplate: "email_template",
} as const;
export type CustomMessageType1 = (typeof CustomMessageType1)[keyof typeof CustomMessageType1] | (string & {});

export const customMessageType1Schema: EnumSchema<CustomMessageType1> =
  s.enumOf<CustomMessageType1>(CustomMessageType1);
