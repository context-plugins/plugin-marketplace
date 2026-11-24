import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TraceBatchValidateRequest = {
  traceIds: string[];
  isValid: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceBatchValidateRequestSchema: Schema<TraceBatchValidateRequest> =
  s.object<TraceBatchValidateRequest>(
    {
      traceIds: s.array(s.string()),
      isValid: s.boolean(),
      _keysMap: {
        traceIds: "trace_ids",
        isValid: "is_valid",
      },
    },
    { additionalProperties: s.json() },
  );
