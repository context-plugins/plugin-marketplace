import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ImportCreateRequest = {
  /** @default "harbor" */
  format?: "harbor";
  /** A ready data file holding the bundle */
  fileId: string;
  /** The taskset the bundle is imported into; the caller must be able to edit it */
  tasksetId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importCreateRequestSchema: Schema<ImportCreateRequest> = s.object<ImportCreateRequest>(
  {
    format: s.defaulted(s.literal("harbor"), "harbor"),
    fileId: s.string(),
    tasksetId: s.string(),
    _keysMap: {
      fileId: "file_id",
      tasksetId: "taskset_id",
    },
  },
  { additionalProperties: s.json() },
);
