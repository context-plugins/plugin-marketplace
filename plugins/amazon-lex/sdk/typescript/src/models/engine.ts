import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with
 * the user. For more information, see the engine parameter of the SynthesizeSpeech operation in the
 * Amazon Polly developer guide. If you do not specify a value, the default is standard.
 */
export const Engine = {
  Standard: "standard",
  Neural: "neural",
  LongForm: "long-form",
  Generative: "generative",
} as const;
export type Engine = (typeof Engine)[keyof typeof Engine] | (string & {});

export const engineSchema: EnumSchema<Engine> = s.enumOf<Engine>(Engine);
