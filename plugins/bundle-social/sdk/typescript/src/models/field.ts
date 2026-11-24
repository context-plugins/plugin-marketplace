import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Field = {
  Text: "TEXT",
  Payload: "PAYLOAD",
  Platform: "PLATFORM",
  SenderId: "SENDER_ID",
} as const;
export type Field = (typeof Field)[keyof typeof Field] | (string & {});

export const fieldSchema: EnumSchema<Field> = s.enumOf<Field>(Field);
