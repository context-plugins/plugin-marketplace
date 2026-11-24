import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobSchema, type Job } from "./job.js";

export type V1JobsResponse1 = {
  data?: Job;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1JobsResponse1Schema: Schema<V1JobsResponse1> = s.object<V1JobsResponse1>(
  {
    data: s.optional(s.lazy(() => jobSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
