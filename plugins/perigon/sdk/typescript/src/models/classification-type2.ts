import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How matching content is classified. Accepts EVENT, MENTIONS, or TOPIC. */
export const ClassificationType2 = {
  Event: "EVENT",
  Mentions: "MENTIONS",
  Topic: "TOPIC",
} as const;
export type ClassificationType2 =
  | (typeof ClassificationType2)[keyof typeof ClassificationType2]
  | (string & {});

export const classificationType2Schema: EnumSchema<ClassificationType2> =
  s.enumOf<ClassificationType2>(ClassificationType2);
