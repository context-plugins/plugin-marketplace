import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The access level of the folder within the workspace. */
export const AccessLevel = {
  Write: "write",
  Read: "read",
} as const;
export type AccessLevel = (typeof AccessLevel)[keyof typeof AccessLevel] | (string & {});

export const accessLevelSchema: EnumSchema<AccessLevel> = s.enumOf<AccessLevel>(AccessLevel);
