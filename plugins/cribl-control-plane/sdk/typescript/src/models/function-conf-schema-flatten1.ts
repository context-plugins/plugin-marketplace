import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration specific to the Pipeline Function. */
export type FunctionConfSchemaFlatten1 = {
  /**
   * List of top-level fields to include for flattening. Supports * wildcards, except when used on
   * internal fields. Defaults to empty array, which means all fields.
   */
  fields?: string[];
  /** Prefix string for flattened field names. Defaults to empty. */
  prefix?: string;
  /**
   * Number representing the nested levels to consider for flattening. Defaults to 5. Minimum should
   * be 1.
   */
  depth?: number;
  /** Delimiter to be used for flattening. Defaults to underscore. */
  delimiter?: string;
};

export const functionConfSchemaFlatten1Schema: Schema<FunctionConfSchemaFlatten1> =
  s.object<FunctionConfSchemaFlatten1>({
    fields: s.optional(s.array(s.string())),
    prefix: s.optional(s.string()),
    depth: s.optional(s.float64()),
    delimiter: s.optional(s.string()),
  });
