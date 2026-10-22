import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Directory response format: normalized (default) strips \@hours and formats times; raw returns
 * stored \@hours values.
 */
export const DirectoryResponseFormat1 = {
  Normalized: "normalized",
  Raw: "raw",
} as const;
export type DirectoryResponseFormat1 =
  | (typeof DirectoryResponseFormat1)[keyof typeof DirectoryResponseFormat1]
  | (string & {});

export const directoryResponseFormat1Schema: EnumSchema<DirectoryResponseFormat1> =
  s.enumOf<DirectoryResponseFormat1>(DirectoryResponseFormat1);
