import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CancelRequest = {
  traceId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelRequestSchema: Schema<CancelRequest> = s.object<CancelRequest>(
  {
    traceId: s.string(),
    _keysMap: {
      traceId: "trace_id",
    },
  },
  { additionalProperties: s.json() },
);
