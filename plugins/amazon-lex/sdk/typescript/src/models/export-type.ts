import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The format of the exported data. */
export const ExportType = {
  AlexaSkillsKit: "ALEXA_SKILLS_KIT",
  Lex: "LEX",
} as const;
export type ExportType = (typeof ExportType)[keyof typeof ExportType] | (string & {});

export const exportTypeSchema: EnumSchema<ExportType> = s.enumOf<ExportType>(ExportType);
