import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Choose whether you want to update a real-time or a post-call category. The input type you specify
 * must match the input type specified when the category was created. For example, if you created a
 * category with the POST_CALL input type, you must use POST_CALL as the input type when updating
 * this category.
 */
export const InputType2 = {
  RealTime: "REAL_TIME",
  PostCall: "POST_CALL",
} as const;
export type InputType2 = (typeof InputType2)[keyof typeof InputType2] | (string & {});

export const inputType2Schema: EnumSchema<InputType2> = s.enumOf<InputType2>(InputType2);
