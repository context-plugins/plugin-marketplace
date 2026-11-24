import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectStatusResponseSchema, type ProjectStatusResponse } from "./project-status-response.js";

export type ProjectStatusesResponse = {
  data?: ProjectStatusResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectStatusesResponseSchema: Schema<ProjectStatusesResponse> =
  s.object<ProjectStatusesResponse>(
    {
      data: s.optional(s.lazy(() => projectStatusResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
