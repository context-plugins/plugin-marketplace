import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fileInputSource2Schema, type FileInputSource2 } from "./file-input-source2.js";
import { gcsInputSource1Schema, type GcsInputSource1 } from "./gcs-input-source1.js";

/** The request for importing an AdaptiveMt file along with its sentences. */
export type ImportAdaptiveMtFileRequest = {
  /** Inline file source. */
  fileInputSource?: FileInputSource2;
  /** Google Cloud Storage file source. */
  gcsInputSource?: GcsInputSource1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importAdaptiveMtFileRequestSchema: Schema<ImportAdaptiveMtFileRequest> =
  s.object<ImportAdaptiveMtFileRequest>(
    {
      fileInputSource: s.optional(s.lazy(() => fileInputSource2Schema)),
      gcsInputSource: s.optional(s.lazy(() => gcsInputSource1Schema)),
    },
    { additionalProperties: s.json() },
  );
