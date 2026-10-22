import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Action3 = {
  Say: "say",
} as const;
export type Action3 = (typeof Action3)[keyof typeof Action3] | (string & {});

export const action3Schema: EnumSchema<Action3> = s.enumOf<Action3>(Action3);
