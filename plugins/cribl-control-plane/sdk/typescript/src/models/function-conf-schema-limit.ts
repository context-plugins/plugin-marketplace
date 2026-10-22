import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FunctionConfSchemaLimit = {
  /** Number of qualifying events to pass through */
  limit?: number;
};

export const functionConfSchemaLimitSchema: Schema<FunctionConfSchemaLimit> =
  s.object<FunctionConfSchemaLimit>({
    limit: s.optional(s.int()),
  });
