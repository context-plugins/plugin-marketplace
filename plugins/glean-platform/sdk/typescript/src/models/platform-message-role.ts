import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Role of the message author. */
export const PlatformMessageRole = {
  User: "USER",
  GleanAi: "GLEAN_AI",
} as const;
export type PlatformMessageRole =
  | (typeof PlatformMessageRole)[keyof typeof PlatformMessageRole]
  | (string & {});

export const platformMessageRoleSchema: EnumSchema<PlatformMessageRole> =
  s.enumOf<PlatformMessageRole>(PlatformMessageRole);
