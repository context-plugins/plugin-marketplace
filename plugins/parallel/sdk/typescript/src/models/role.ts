import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Role = {
  Developer: "developer",
  System: "system",
  User: "user",
  Assistant: "assistant",
  Tool: "tool",
} as const;
export type Role = (typeof Role)[keyof typeof Role] | (string & {});

export const roleSchema: EnumSchema<Role> = s.enumOf<Role>(Role);
