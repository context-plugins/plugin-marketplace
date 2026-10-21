import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccessLevel = {
  Read: "read",
  Write: "write",
} as const;
export type AccessLevel = (typeof AccessLevel)[keyof typeof AccessLevel] | (string & {});

export const accessLevelSchema: EnumSchema<AccessLevel> = s.enumOf<AccessLevel>(AccessLevel);
