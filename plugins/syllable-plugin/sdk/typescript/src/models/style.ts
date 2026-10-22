import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Style = {
  Short: "short",
  Medium: "medium",
  Long: "long",
  Full: "full",
} as const;
export type Style = (typeof Style)[keyof typeof Style] | (string & {});

export const styleSchema: EnumSchema<Style> = s.enumOf<Style>(Style);
