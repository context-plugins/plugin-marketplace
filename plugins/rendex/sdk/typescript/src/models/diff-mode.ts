import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DiffMode = {
  Visual: "visual",
  Text: "text",
  Both: "both",
} as const;
export type DiffMode = (typeof DiffMode)[keyof typeof DiffMode] | (string & {});

export const diffModeSchema: EnumSchema<DiffMode> = s.enumOf<DiffMode>(DiffMode);
