import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteExportRequest = {
  /** The unique identifier of the export to delete. */
  exportId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteExportRequestSchema: Schema<DeleteExportRequest> = s.object<DeleteExportRequest>(
  {
    exportId: s.string(),
  },
  { additionalProperties: s.json() },
);
