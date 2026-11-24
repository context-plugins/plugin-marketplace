import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EngineType = {
  I: "I",
  V: "V",
  W: "W",
  B: "B",
  H: "H",
} as const;
export type EngineType = (typeof EngineType)[keyof typeof EngineType] | (string & {});

export const engineTypeSchema: EnumSchema<EngineType> = s.enumOf<EngineType>(EngineType);
