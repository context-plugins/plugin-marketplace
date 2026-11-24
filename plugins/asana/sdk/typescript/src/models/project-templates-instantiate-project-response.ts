import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobResponseSchema, type JobResponse } from "./job-response.js";

export type ProjectTemplatesInstantiateProjectResponse = {
  data?: JobResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectTemplatesInstantiateProjectResponseSchema: Schema<ProjectTemplatesInstantiateProjectResponse> =
  s.object<ProjectTemplatesInstantiateProjectResponse>(
    {
      data: s.optional(s.lazy(() => jobResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
