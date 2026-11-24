import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { extractorSchema, type Extractor } from "./extractor.js";

export type ProjectsExtractorsResponse = {
  extractors?: Extractor[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsExtractorsResponseSchema: Schema<ProjectsExtractorsResponse> =
  s.object<ProjectsExtractorsResponse>(
    {
      extractors: s.optional(s.array(s.lazy(() => extractorSchema))),
    },
    { additionalProperties: s.json() },
  );
