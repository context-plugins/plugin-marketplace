import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usageRowSchema, type UsageRow } from "./usage-row.js";

export type V1UsageResponse = {
  data?: UsageRow[];
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1UsageResponseSchema: Schema<V1UsageResponse> = s.object<V1UsageResponse>(
  {
    data: s.optional(s.array(s.lazy(() => usageRowSchema))),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
