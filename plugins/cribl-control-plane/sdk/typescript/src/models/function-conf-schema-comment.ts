import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FunctionConfSchemaComment = {
  /** Optional, short description of this Function's purpose in the Pipeline */
  comment?: string;
};

export const functionConfSchemaCommentSchema: Schema<FunctionConfSchemaComment> =
  s.object<FunctionConfSchemaComment>({
    comment: s.optional(s.string()),
  });
