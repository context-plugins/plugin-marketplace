import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetDocPermissionsRequest = {
  /** The Glean Document ID to retrieve permissions for. */
  documentId?: string;
};

export const getDocPermissionsRequestSchema: Schema<GetDocPermissionsRequest> =
  s.object<GetDocPermissionsRequest>({
    documentId: s.optional(s.string()),
  });
