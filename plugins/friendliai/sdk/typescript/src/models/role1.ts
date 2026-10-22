import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The role of the message input. One of `user`, `assistant`, `system`, or `developer`. */
export const Role1 = {
  User: "user",
  Assistant: "assistant",
  System: "system",
  Developer: "developer",
} as const;
export type Role1 = (typeof Role1)[keyof typeof Role1] | (string & {});

export const role1Schema: EnumSchema<Role1> = s.enumOf<Role1>(Role1);
