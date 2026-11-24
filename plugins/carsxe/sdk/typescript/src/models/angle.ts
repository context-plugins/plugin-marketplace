import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Angle = {
  Front: "front",
  Side: "side",
  Back: "back",
} as const;
export type Angle = (typeof Angle)[keyof typeof Angle] | (string & {});

export const angleSchema: EnumSchema<Angle> = s.enumOf<Angle>(Angle);
