import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * One of "first" or "last". This can be used to move the given story to the first or last position
 * in the workflow state.
 */
export const MoveTo = {
  Last: "last",
  First: "first",
} as const;
export type MoveTo = (typeof MoveTo)[keyof typeof MoveTo] | (string & {});

export const moveToSchema: EnumSchema<MoveTo> = s.enumOf<MoveTo>(MoveTo);
