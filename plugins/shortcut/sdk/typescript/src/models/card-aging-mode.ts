import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The card aging mode for stories in this Group: "gradual" (fixed fade steps at 1, 2, and 4 weeks),
 * "immediate", or "off" (explicitly disabled for this Group). Set to null to inherit the Workspace
 * default.
 */
export const CardAgingMode = {
  Off: "off",
  Gradual: "gradual",
  Immediate: "immediate",
} as const;
export type CardAgingMode = (typeof CardAgingMode)[keyof typeof CardAgingMode] | (string & {});

export const cardAgingModeSchema: EnumSchema<CardAgingMode> = s.enumOf<CardAgingMode>(CardAgingMode);
