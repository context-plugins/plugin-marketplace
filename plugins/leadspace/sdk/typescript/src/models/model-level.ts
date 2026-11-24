import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ModelLevel = {
  High: "High",
  Medium: "Medium",
  Low: "Low",
  NoIntent: "NO_INTENT",
} as const;
export type ModelLevel = (typeof ModelLevel)[keyof typeof ModelLevel] | (string & {});

export const modelLevelSchema: EnumSchema<ModelLevel> = s.enumOf<ModelLevel>(ModelLevel);
