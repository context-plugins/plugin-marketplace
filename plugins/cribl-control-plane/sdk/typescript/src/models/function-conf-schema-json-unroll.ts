import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FunctionConfSchemaJsonUnroll = {
  /** Path to array to unroll, such as foo.0.bar */
  path?: string;
  /**
   * Name of each exploded array element in each new event. Leave empty to expand the array element
   * with its original name.
   */
  name?: string;
};

export const functionConfSchemaJsonUnrollSchema: Schema<FunctionConfSchemaJsonUnroll> =
  s.object<FunctionConfSchemaJsonUnroll>({
    path: s.optional(s.string()),
    name: s.optional(s.string()),
  });
