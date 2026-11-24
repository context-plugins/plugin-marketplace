import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CompletionType = {
  All: "all",
  Any: "any",
} as const;
export type CompletionType = (typeof CompletionType)[keyof typeof CompletionType] | (string & {});

export const completionTypeSchema: EnumSchema<CompletionType> = s.enumOf<CompletionType>(CompletionType);
