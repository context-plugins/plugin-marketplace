import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A task property the importer can drop because the plan excludes it. */
export const DiscardedFieldName = {
  Deadline: "deadline",
  Duration: "duration",
} as const;
export type DiscardedFieldName = (typeof DiscardedFieldName)[keyof typeof DiscardedFieldName] | (string & {});

export const discardedFieldNameSchema: EnumSchema<DiscardedFieldName> =
  s.enumOf<DiscardedFieldName>(DiscardedFieldName);
