import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { traceStorageObjectSchema, type TraceStorageObject } from "./trace-storage-object.js";

export type TraceStorageObjectListResponse = {
  traceId: string;
  /** @default "artifact" */
  kind?: "artifact";
  objects: TraceStorageObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceStorageObjectListResponseSchema: Schema<TraceStorageObjectListResponse> =
  s.object<TraceStorageObjectListResponse>(
    {
      traceId: s.string(),
      kind: s.defaulted(s.literal("artifact"), "artifact"),
      objects: s.array(s.lazy(() => traceStorageObjectSchema)),
      _keysMap: {
        traceId: "trace_id",
      },
    },
    { additionalProperties: s.json() },
  );
