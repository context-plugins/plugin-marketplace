import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LatencyCategory = {
  Tts: "tts",
  Stt: "stt",
  Llm: "llm",
  Tool: "tool",
  Http: "http",
} as const;
export type LatencyCategory = (typeof LatencyCategory)[keyof typeof LatencyCategory] | (string & {});

export const latencyCategorySchema: EnumSchema<LatencyCategory> = s.enumOf<LatencyCategory>(LatencyCategory);
