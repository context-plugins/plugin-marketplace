import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How matching content is classified: EVENT, MENTIONS, or TOPIC. */
export const ClassificationType = {
  Event: "EVENT",
  Mentions: "MENTIONS",
  Topic: "TOPIC",
} as const;
export type ClassificationType = (typeof ClassificationType)[keyof typeof ClassificationType] | (string & {});

export const classificationTypeSchema: EnumSchema<ClassificationType> =
  s.enumOf<ClassificationType>(ClassificationType);
