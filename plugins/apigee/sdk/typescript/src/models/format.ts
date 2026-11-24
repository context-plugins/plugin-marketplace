import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The format of the input specification file contents. */
export const Format = {
  FormatUnspecified: "FORMAT_UNSPECIFIED",
  Yaml: "YAML",
  Json: "JSON",
} as const;
export type Format = (typeof Format)[keyof typeof Format] | (string & {});

export const formatSchema: EnumSchema<Format> = s.enumOf<Format>(Format);
