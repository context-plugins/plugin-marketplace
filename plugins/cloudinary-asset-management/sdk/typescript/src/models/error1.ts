import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The error message if restore failed for a specific asset. */
export const Error1 = {
  NoBackup: "no_backup",
  Failed: "failed",
  Unauthorized: "unauthorized",
} as const;
export type Error1 = (typeof Error1)[keyof typeof Error1] | (string & {});

export const error1Schema: EnumSchema<Error1> = s.enumOf<Error1>(Error1);
