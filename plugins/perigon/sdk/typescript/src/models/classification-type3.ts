import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ClassificationType3 = {
  Event: "EVENT",
  Mentions: "MENTIONS",
  Topic: "TOPIC",
} as const;
export type ClassificationType3 =
  | (typeof ClassificationType3)[keyof typeof ClassificationType3]
  | (string & {});

export const classificationType3Schema: EnumSchema<ClassificationType3> =
  s.enumOf<ClassificationType3>(ClassificationType3);
