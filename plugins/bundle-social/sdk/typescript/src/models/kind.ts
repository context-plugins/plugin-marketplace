import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether the background is a flat color, a gradient, or an illustration. */
export const Kind = {
  Color: "color",
  Gradient: "gradient",
  Illustration: "illustration",
} as const;
export type Kind = (typeof Kind)[keyof typeof Kind] | (string & {});

export const kindSchema: EnumSchema<Kind> = s.enumOf<Kind>(Kind);
