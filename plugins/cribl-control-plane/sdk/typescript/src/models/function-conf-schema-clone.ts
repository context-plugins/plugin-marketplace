import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FunctionConfSchemaClone = {
  /** Create clones with the following fields set */
  clones?: string[];
};

export const functionConfSchemaCloneSchema: Schema<FunctionConfSchemaClone> =
  s.object<FunctionConfSchemaClone>({
    clones: s.optional(s.array(s.string())),
  });
