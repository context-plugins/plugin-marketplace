import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data1InternalSchema, data1Schema, type Data1 } from "./data1.js";
import { responseMetaSchema, type ResponseMeta } from "./response-meta.js";

export type JobStatusResponse = {
  success?: boolean;
  data?: Data1;
  meta?: ResponseMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const jobStatusResponseProperties: s.Shape<JobStatusResponse> = {
  success: s.optional(s.boolean()),
  data: s.optional(s.lazy(() => data1InternalSchema)),
  meta: s.optional(s.lazy(() => responseMetaSchema)),
};

export const jobStatusResponseInternalSchema: Schema<JobStatusResponse> = s.object<JobStatusResponse>(
  jobStatusResponseProperties,
  { additionalProperties: s.json() },
);

export const jobStatusResponseSchema: Schema<JobStatusResponse> = s.lazySchema(() =>
  s.object<JobStatusResponse>(
    {
      ...jobStatusResponseProperties,
      data: s.optional(s.lazy(() => data1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
