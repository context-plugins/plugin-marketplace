import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sectionRequestSchema, type SectionRequest } from "./section-request.js";

export type ProjectsSectionsRequest = {
  data?: SectionRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsSectionsRequestSchema: Schema<ProjectsSectionsRequest> =
  s.object<ProjectsSectionsRequest>(
    {
      data: s.optional(s.lazy(() => sectionRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
