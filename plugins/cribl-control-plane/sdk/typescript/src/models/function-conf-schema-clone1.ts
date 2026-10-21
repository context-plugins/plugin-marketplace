import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration specific to the Pipeline Function. */
export type FunctionConfSchemaClone1 = {
  /** Create clones with the following fields set */
  clones?: string[];
};

export const functionConfSchemaClone1Schema: Schema<FunctionConfSchemaClone1> =
  s.object<FunctionConfSchemaClone1>({
    clones: s.optional(s.array(s.string())),
  });
