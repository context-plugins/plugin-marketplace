import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** New classification behavior. Accepts EVENT, MENTIONS, or TOPIC. */
export const ClassificationType1 = {
  Event: "EVENT",
  Mentions: "MENTIONS",
  Topic: "TOPIC",
} as const;
export type ClassificationType1 =
  | (typeof ClassificationType1)[keyof typeof ClassificationType1]
  | (string & {});

export const classificationType1Schema: EnumSchema<ClassificationType1> =
  s.enumOf<ClassificationType1>(ClassificationType1);
