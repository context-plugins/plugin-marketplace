import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Amazon Transcribe standard language model, or base model, used to create your custom language
 * model. Amazon Transcribe offers two options for base models: Wideband and Narrowband. If the
 * audio you want to transcribe has a sample rate of 16,000 Hz or greater, choose WideBand. To
 * transcribe audio with a sample rate less than 16,000 Hz, choose NarrowBand.
 */
export const BaseModelName = {
  NarrowBand: "NarrowBand",
  WideBand: "WideBand",
} as const;
export type BaseModelName = (typeof BaseModelName)[keyof typeof BaseModelName] | (string & {});

export const baseModelNameSchema: EnumSchema<BaseModelName> = s.enumOf<BaseModelName>(BaseModelName);
