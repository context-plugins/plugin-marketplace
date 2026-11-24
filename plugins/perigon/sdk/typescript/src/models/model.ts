import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The underlying LLM model to use for generation. */
export const Model = {
  Gpt54Mini: "gpt-5.4-mini",
  Gpt54Nano: "gpt-5.4-nano",
  Gpt5Mini: "gpt-5-mini",
  Gpt5Nano: "gpt-5-nano",
  Gpt4O: "gpt-4o",
  Gpt4OMini: "gpt-4o-mini",
  Gpt41: "gpt-4.1",
  Gpt41Mini: "gpt-4.1-mini",
  OpenaiGptOss120B: "openai/gpt-oss-120b",
} as const;
export type Model = (typeof Model)[keyof typeof Model] | (string & {});

export const modelSchema: EnumSchema<Model> = s.enumOf<Model>(Model);
