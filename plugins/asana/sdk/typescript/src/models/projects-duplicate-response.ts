import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobResponseSchema, type JobResponse } from "./job-response.js";

export type ProjectsDuplicateResponse = {
  data?: JobResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsDuplicateResponseSchema: Schema<ProjectsDuplicateResponse> =
  s.object<ProjectsDuplicateResponse>(
    {
      data: s.optional(s.lazy(() => jobResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
