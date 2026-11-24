import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  enrichedPersonInternalSchema,
  enrichedPersonSchema,
  type EnrichedPerson,
} from "./enriched-person.js";
import { jobStatusSchema, type JobStatus } from "./job-status.js";

export type PeopleEnrichmentResult = {
  enrichmentId?: string;
  status?: JobStatus;
  percentCompleted?: number;
  people?: EnrichedPerson[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const peopleEnrichmentResultProperties: s.Shape<PeopleEnrichmentResult> = {
  enrichmentId: s.optional(s.string()),
  status: s.optional(s.lazy(() => jobStatusSchema)),
  percentCompleted: s.optional(s.int()),
  people: s.optional(s.array(s.lazy(() => enrichedPersonInternalSchema))),
  _keysMap: {
    enrichmentId: "enrichmentID",
  },
};

export const peopleEnrichmentResultInternalSchema: Schema<PeopleEnrichmentResult> =
  s.object<PeopleEnrichmentResult>(peopleEnrichmentResultProperties, { additionalProperties: s.json() });

export const peopleEnrichmentResultSchema: Schema<PeopleEnrichmentResult> = s.lazySchema(() =>
  s.object<PeopleEnrichmentResult>(
    {
      ...peopleEnrichmentResultProperties,
      people: s.optional(s.array(s.lazy(() => enrichedPersonSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
