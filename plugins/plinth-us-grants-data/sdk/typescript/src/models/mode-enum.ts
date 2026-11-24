import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ModeEnum = {
  Text: "text",
  Semantic: "semantic",
  Hybrid: "hybrid",
} as const;
export type ModeEnum = (typeof ModeEnum)[keyof typeof ModeEnum] | (string & {});

export const modeEnumSchema: EnumSchema<ModeEnum> = s.enumOf<ModeEnum>(ModeEnum);
