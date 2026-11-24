import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The input type associated with the specified category. POST_CALL refers to a category that is
 * applied to batch transcriptions; REAL_TIME refers to a category that is applied to streaming
 * transcriptions.
 */
export const InputType = {
  RealTime: "REAL_TIME",
  PostCall: "POST_CALL",
} as const;
export type InputType = (typeof InputType)[keyof typeof InputType] | (string & {});

export const inputTypeSchema: EnumSchema<InputType> = s.enumOf<InputType>(InputType);
