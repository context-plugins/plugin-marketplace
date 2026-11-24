import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Choose whether you want to create a real-time or a post-call category for your Call Analytics
 * transcription. Specifying POST_CALL assigns your category to post-call transcriptions; categories
 * with this input type cannot be applied to streaming (real-time) transcriptions. Specifying
 * REAL_TIME assigns your category to streaming transcriptions; categories with this input type
 * cannot be applied to post-call transcriptions. If you do not include InputType, your category is
 * created as a post-call category by default.
 */
export const InputType1 = {
  RealTime: "REAL_TIME",
  PostCall: "POST_CALL",
} as const;
export type InputType1 = (typeof InputType1)[keyof typeof InputType1] | (string & {});

export const inputType1Schema: EnumSchema<InputType1> = s.enumOf<InputType1>(InputType1);
