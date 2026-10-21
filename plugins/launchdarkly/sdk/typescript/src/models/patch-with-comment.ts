import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { patchOperationSchema, type PatchOperation } from "./patch-operation.js";

export type PatchWithComment = {
  patch: PatchOperation[];
  /** Optional comment */
  comment?: string;
};

export const patchWithCommentSchema: Schema<PatchWithComment> = s.object<PatchWithComment>({
  patch: s.array(s.lazy(() => patchOperationSchema)),
  comment: s.optional(s.string()),
});
