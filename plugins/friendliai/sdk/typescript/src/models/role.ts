import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Author role for this message turn. Use `user` for user input and `assistant` for prior assistant
 * turns.
 */
export const Role = {
  User: "user",
  Assistant: "assistant",
} as const;
export type Role = (typeof Role)[keyof typeof Role] | (string & {});

export const roleSchema: EnumSchema<Role> = s.enumOf<Role>(Role);
