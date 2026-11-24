import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Message = {
  ValidationFailed: "Validation failed",
} as const;
export type Message = (typeof Message)[keyof typeof Message] | (string & {});

export const messageSchema: EnumSchema<Message> = s.enumOf<Message>(Message);
