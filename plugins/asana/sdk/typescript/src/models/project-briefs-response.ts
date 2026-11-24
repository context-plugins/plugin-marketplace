import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectBriefResponseSchema, type ProjectBriefResponse } from "./project-brief-response.js";

export type ProjectBriefsResponse = {
  data?: ProjectBriefResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectBriefsResponseSchema: Schema<ProjectBriefsResponse> = s.object<ProjectBriefsResponse>(
  {
    data: s.optional(s.lazy(() => projectBriefResponseSchema)),
  },
  { additionalProperties: s.json() },
);
