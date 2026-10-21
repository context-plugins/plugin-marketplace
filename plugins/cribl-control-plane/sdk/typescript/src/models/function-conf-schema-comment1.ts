import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration specific to the Pipeline Function. */
export type FunctionConfSchemaComment1 = {
  /** Optional, short description of this Function's purpose in the Pipeline */
  comment?: string;
};

export const functionConfSchemaComment1Schema: Schema<FunctionConfSchemaComment1> =
  s.object<FunctionConfSchemaComment1>({
    comment: s.optional(s.string()),
  });
