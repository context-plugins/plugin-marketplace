import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectBriefRequestSchema, type ProjectBriefRequest } from "./project-brief-request.js";

export type ProjectBriefsRequest = {
  data?: ProjectBriefRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectBriefsRequestSchema: Schema<ProjectBriefsRequest> = s.object<ProjectBriefsRequest>(
  {
    data: s.optional(s.lazy(() => projectBriefRequestSchema)),
  },
  { additionalProperties: s.json() },
);
