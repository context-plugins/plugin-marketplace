import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of AI model */
export const ModelType = {
  Llm: "llm",
  Embedding: "embedding",
  Ocr: "ocr",
  Slm: "slm",
  Reasoning: "reasoning",
  MultiModal: "multiModal",
  ImageGeneration: "imageGeneration",
  Tts: "tts",
  Stt: "stt",
  Decision: "decision",
} as const;
export type ModelType = (typeof ModelType)[keyof typeof ModelType] | (string & {});

export const modelTypeSchema: EnumSchema<ModelType> = s.enumOf<ModelType>(ModelType);
