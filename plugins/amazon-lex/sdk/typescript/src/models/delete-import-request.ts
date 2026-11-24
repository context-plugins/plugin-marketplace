import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteImportRequest = {
  /** The unique identifier of the import to delete. */
  importId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteImportRequestSchema: Schema<DeleteImportRequest> = s.object<DeleteImportRequest>(
  {
    importId: s.string(),
  },
  { additionalProperties: s.json() },
);
