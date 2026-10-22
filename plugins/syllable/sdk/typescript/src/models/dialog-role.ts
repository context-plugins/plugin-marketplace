import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Role of dialog */
export const DialogRole = {
  Agent: "agent",
  User: "user",
} as const;
export type DialogRole = (typeof DialogRole)[keyof typeof DialogRole] | (string & {});

export const dialogRoleSchema: EnumSchema<DialogRole> = s.enumOf<DialogRole>(DialogRole);
