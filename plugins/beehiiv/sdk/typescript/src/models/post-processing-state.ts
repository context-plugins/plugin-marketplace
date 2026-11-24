import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The background creation state of the post. */
export const PostProcessingState = {
  Pending: "pending",
} as const;
export type PostProcessingState =
  | (typeof PostProcessingState)[keyof typeof PostProcessingState]
  | (string & {});

export const postProcessingStateSchema: EnumSchema<PostProcessingState> =
  s.enumOf<PostProcessingState>(PostProcessingState);
