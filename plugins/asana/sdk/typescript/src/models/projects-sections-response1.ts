import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sectionResponseSchema, type SectionResponse } from "./section-response.js";

export type ProjectsSectionsResponse1 = {
  data?: SectionResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsSectionsResponse1Schema: Schema<ProjectsSectionsResponse1> =
  s.object<ProjectsSectionsResponse1>(
    {
      data: s.optional(s.lazy(() => sectionResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
