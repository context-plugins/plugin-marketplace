import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Action2 = {
  Call: "call",
} as const;
export type Action2 = (typeof Action2)[keyof typeof Action2] | (string & {});

export const action2Schema: EnumSchema<Action2> = s.enumOf<Action2>(Action2);
