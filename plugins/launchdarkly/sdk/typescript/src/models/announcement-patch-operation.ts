import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AnnouncementPatchOperation = {
  /** The type of operation to perform */
  op: string;
  /** A JSON Pointer string specifying the part of the document to operate on */
  path: string;
  /** A JSON value used in "add", "replace", and "test" operations */
  value?: Record<string, unknown>;
};

export const announcementPatchOperationSchema: Schema<AnnouncementPatchOperation> =
  s.object<AnnouncementPatchOperation>({
    op: s.string(),
    path: s.string(),
    value: s.optional(s.record(s.string(), s.unknown())),
  });
