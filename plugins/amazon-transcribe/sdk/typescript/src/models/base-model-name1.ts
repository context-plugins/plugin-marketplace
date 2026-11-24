import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Amazon Transcribe standard language model, or base model, you specified when creating your
 * custom language model.
 */
export const BaseModelName1 = {
  NarrowBand: "NarrowBand",
  WideBand: "WideBand",
} as const;
export type BaseModelName1 = (typeof BaseModelName1)[keyof typeof BaseModelName1] | (string & {});

export const baseModelName1Schema: EnumSchema<BaseModelName1> = s.enumOf<BaseModelName1>(BaseModelName1);
