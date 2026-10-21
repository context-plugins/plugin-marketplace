import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Button = {
  Left: "left",
  Right: "right",
  Middle: "middle",
} as const;
export type Button = (typeof Button)[keyof typeof Button] | (string & {});

export const buttonSchema: EnumSchema<Button> = s.enumOf<Button>(Button);
