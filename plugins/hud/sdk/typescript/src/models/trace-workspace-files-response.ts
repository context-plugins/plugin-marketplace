import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { capturedFileSchema, type CapturedFile } from "./captured-file.js";

export type TraceWorkspaceFilesResponse = {
  traceId: string;
  files: CapturedFile[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceWorkspaceFilesResponseSchema: Schema<TraceWorkspaceFilesResponse> =
  s.object<TraceWorkspaceFilesResponse>(
    {
      traceId: s.string(),
      files: s.array(s.lazy(() => capturedFileSchema)),
      _keysMap: {
        traceId: "trace_id",
      },
    },
    { additionalProperties: s.json() },
  );
