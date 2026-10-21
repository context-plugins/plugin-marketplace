import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { citationReferenceSchema, type CitationReference } from "../citation-reference.js";
import {
  populatedCitationReferenceSchema,
  type PopulatedCitationReference,
} from "../populated-citation-reference.js";

export type Citation2 = CitationReference | PopulatedCitationReference;

export const citation2Schema: Schema<Citation2> = s.of<Citation2>(
  s.union([s.lazy(() => citationReferenceSchema), s.lazy(() => populatedCitationReferenceSchema)]),
);
