import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sex2 = {
  Male: "male",
  Female: "female",
} as const;
export type Sex2 = (typeof Sex2)[keyof typeof Sex2] | (string & {});

export const sex2Schema: EnumSchema<Sex2> = s.enumOf<Sex2>(Sex2);
