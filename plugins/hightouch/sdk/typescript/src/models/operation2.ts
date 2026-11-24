import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Operation2 = {
  Create: "create",
  Update: "update",
} as const;
export type Operation2 = (typeof Operation2)[keyof typeof Operation2] | (string & {});

export const operation2Schema: EnumSchema<Operation2> = s.enumOf<Operation2>(Operation2);
