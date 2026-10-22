import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of custom message. Greeting is for voice; email_template is for email (subject + body). */
export const CustomMessageType = {
  Greeting: "greeting",
  EmailTemplate: "email_template",
} as const;
export type CustomMessageType = (typeof CustomMessageType)[keyof typeof CustomMessageType] | (string & {});

export const customMessageTypeSchema: EnumSchema<CustomMessageType> =
  s.enumOf<CustomMessageType>(CustomMessageType);
