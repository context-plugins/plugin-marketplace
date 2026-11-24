import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. Input only. Enum specifying the parsing mode for OpenAPI Specification (OAS) parsing.
 */
export const ParsingMode = {
  ParsingModeUnspecified: "PARSING_MODE_UNSPECIFIED",
  Relaxed: "RELAXED",
  Strict: "STRICT",
} as const;
export type ParsingMode = (typeof ParsingMode)[keyof typeof ParsingMode] | (string & {});

export const parsingModeSchema: EnumSchema<ParsingMode> = s.enumOf<ParsingMode>(ParsingMode);
