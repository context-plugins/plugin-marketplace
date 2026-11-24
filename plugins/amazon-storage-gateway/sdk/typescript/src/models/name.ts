import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The parameter name for a filter that determines which files are included or excluded from a cache
 * report. Valid Names: UploadFailureReason | UploadState
 */
export const Name = {
  UploadState: "UploadState",
  UploadFailureReason: "UploadFailureReason",
} as const;
export type Name = (typeof Name)[keyof typeof Name] | (string & {});

export const nameSchema: EnumSchema<Name> = s.enumOf<Name>(Name);
