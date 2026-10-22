import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FunctionConfSchemaXmlUnroll = {
  /** Path to array to unroll. Example: ^root\.child\.ElementToUnroll$ */
  unroll?: string;
  /**
   * Regex matching elements to copy into each unrolled event. Example:
   * ^root\.(childA|childB|childC)$
   */
  inherit?: string;
  /**
   * Add a field with this name, containing the index at which the item was located, starting from 0
   */
  unrollIdxField?: string;
  /** Pretty print the output XML */
  pretty?: boolean;
};

export const functionConfSchemaXmlUnrollSchema: Schema<FunctionConfSchemaXmlUnroll> =
  s.object<FunctionConfSchemaXmlUnroll>({
    unroll: s.optional(s.string()),
    inherit: s.optional(s.string()),
    unrollIdxField: s.optional(s.string()),
    pretty: s.optional(s.boolean()),
  });
