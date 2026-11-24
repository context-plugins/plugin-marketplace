import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sectionCompactSchema, type SectionCompact } from "./section-compact.js";

export type ProjectsSectionsResponse = {
  data?: SectionCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsSectionsResponseSchema: Schema<ProjectsSectionsResponse> =
  s.object<ProjectsSectionsResponse>(
    {
      data: s.optional(s.array(s.lazy(() => sectionCompactSchema))),
    },
    { additionalProperties: s.json() },
  );
