import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Dialog role */
export const DialogRole1 = {
  Agent: "agent",
  User: "user",
} as const;
export type DialogRole1 = (typeof DialogRole1)[keyof typeof DialogRole1] | (string & {});

export const dialogRole1Schema: EnumSchema<DialogRole1> = s.enumOf<DialogRole1>(DialogRole1);
