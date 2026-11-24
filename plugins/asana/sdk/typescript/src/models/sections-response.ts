import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sectionResponseSchema, type SectionResponse } from "./section-response.js";

export type SectionsResponse = {
  data?: SectionResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sectionsResponseSchema: Schema<SectionsResponse> = s.object<SectionsResponse>(
  {
    data: s.optional(s.lazy(() => sectionResponseSchema)),
  },
  { additionalProperties: s.json() },
);
