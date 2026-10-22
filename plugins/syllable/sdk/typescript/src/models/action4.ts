import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Action4 = {
  Save: "save",
} as const;
export type Action4 = (typeof Action4)[keyof typeof Action4] | (string & {});

export const action4Schema: EnumSchema<Action4> = s.enumOf<Action4>(Action4);
