import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Response shape selector for directory member APIs. */
export const DirectoryResponseFormat = {
  Normalized: "normalized",
  Raw: "raw",
} as const;
export type DirectoryResponseFormat =
  | (typeof DirectoryResponseFormat)[keyof typeof DirectoryResponseFormat]
  | (string & {});

export const directoryResponseFormatSchema: EnumSchema<DirectoryResponseFormat> =
  s.enumOf<DirectoryResponseFormat>(DirectoryResponseFormat);
