import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FunctionConfSchemaUnroll = {
  /** Field in which to find/calculate the array to unroll. Example: _raw, _raw.split(/\n/) */
  srcExpr?: string;
  /** Field in destination event in which to place the unrolled value */
  dstField?: string;
};

export const functionConfSchemaUnrollSchema: Schema<FunctionConfSchemaUnroll> =
  s.object<FunctionConfSchemaUnroll>({
    srcExpr: s.optional(s.string()),
    dstField: s.optional(s.string()),
  });
