import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration specific to the Pipeline Function. */
export type FunctionConfSchemaLimit1 = {
  /** Number of qualifying events to pass through */
  limit?: number;
};

export const functionConfSchemaLimit1Schema: Schema<FunctionConfSchemaLimit1> =
  s.object<FunctionConfSchemaLimit1>({
    limit: s.optional(s.int()),
  });
