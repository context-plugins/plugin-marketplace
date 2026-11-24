import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  enrichedPersonInternalSchema,
  enrichedPersonSchema,
  type EnrichedPerson,
} from "./enriched-person.js";

export type PeopleFindByEmailResponse = {
  people?: EnrichedPerson[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const peopleFindByEmailResponseProperties: s.Shape<PeopleFindByEmailResponse> = {
  people: s.optional(s.array(s.lazy(() => enrichedPersonInternalSchema))),
};

export const peopleFindByEmailResponseInternalSchema: Schema<PeopleFindByEmailResponse> =
  s.object<PeopleFindByEmailResponse>(peopleFindByEmailResponseProperties, {
    additionalProperties: s.json(),
  });

export const peopleFindByEmailResponseSchema: Schema<PeopleFindByEmailResponse> = s.lazySchema(() =>
  s.object<PeopleFindByEmailResponse>(
    {
      ...peopleFindByEmailResponseProperties,
      people: s.optional(s.array(s.lazy(() => enrichedPersonSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
