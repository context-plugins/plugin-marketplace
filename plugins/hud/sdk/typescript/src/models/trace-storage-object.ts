import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TraceStorageObject = {
  path: string;
  downloadUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceStorageObjectSchema: Schema<TraceStorageObject> = s.object<TraceStorageObject>(
  {
    path: s.string(),
    downloadUrl: s.string(),
    _keysMap: {
      downloadUrl: "download_url",
    },
  },
  { additionalProperties: s.json() },
);
