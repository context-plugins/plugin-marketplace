import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Amazon Transcribe standard language model, or base model, used to create your custom language
 * model.
 */
export const BaseModelName2 = {
  NarrowBand: "NarrowBand",
  WideBand: "WideBand",
} as const;
export type BaseModelName2 = (typeof BaseModelName2)[keyof typeof BaseModelName2] | (string & {});

export const baseModelName2Schema: EnumSchema<BaseModelName2> = s.enumOf<BaseModelName2>(BaseModelName2);
