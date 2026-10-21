import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of the section. This defines how the section should be interpreted and rendered in the
 * digest.
 */
export const SectionType = {
  Channel: "CHANNEL",
  Mentions: "MENTIONS",
  Topic: "TOPIC",
} as const;
export type SectionType = (typeof SectionType)[keyof typeof SectionType] | (string & {});

export const sectionTypeSchema: EnumSchema<SectionType> = s.enumOf<SectionType>(SectionType);
