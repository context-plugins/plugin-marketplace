import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobResponseSchema, type JobResponse } from "./job-response.js";

export type PaginatedResponseJobResponse = {
  items: JobResponse[];
  total: number;
  limit: number;
  offset: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedResponseJobResponseSchema: Schema<PaginatedResponseJobResponse> =
  s.object<PaginatedResponseJobResponse>(
    {
      items: s.array(s.lazy(() => jobResponseSchema)),
      total: s.int(),
      limit: s.int(),
      offset: s.int(),
    },
    { additionalProperties: s.json() },
  );
