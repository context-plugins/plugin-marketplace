import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Directory response format for the restored member. */
export const DirectoryResponseFormat6 = {
  Normalized: "normalized",
  Raw: "raw",
} as const;
export type DirectoryResponseFormat6 =
  | (typeof DirectoryResponseFormat6)[keyof typeof DirectoryResponseFormat6]
  | (string & {});

export const directoryResponseFormat6Schema: EnumSchema<DirectoryResponseFormat6> =
  s.enumOf<DirectoryResponseFormat6>(DirectoryResponseFormat6);
