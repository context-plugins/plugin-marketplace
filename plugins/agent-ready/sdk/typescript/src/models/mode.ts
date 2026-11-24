import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Mode = {
  List: "list",
  Summarize: "summarize",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
