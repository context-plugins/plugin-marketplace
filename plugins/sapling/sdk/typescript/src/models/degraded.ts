import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

/**
 * Present only on a partial result: a model stage could not process some sentences in time, so
 * those sentences may be missing some or all of their corrections (a failed primary stage leaves a
 * sentence unchecked; a failed secondary stage, e.g. neural spellcheck or postprocessing, drops
 * only that stage's corrections). Every edit returned is still valid. Absent from a fully
 * successful response. Retry the request (after a short backoff) for a complete result.
 */
export type Degraded = {
  reason: Reason;
  sentencesDegraded: number;
  sentencesTotal: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const degradedProperties: s.Shape<Degraded> = {
  reason: reasonSchema,
  sentencesDegraded: s.int(),
  sentencesTotal: s.int(),
  _keysMap: {
    sentencesDegraded: "sentences_degraded",
    sentencesTotal: "sentences_total",
  },
};

export const degradedInternalSchema: Schema<Degraded> = s.object<Degraded>(degradedProperties, {
  additionalProperties: s.json(),
});

export const degradedSchema: Schema<Degraded> = s.lazySchema(() =>
  s.object<Degraded>(
    {
      ...degradedProperties,
      sentencesDegraded: s.int().check(s.gte(1)),
      sentencesTotal: s.int().check(s.gte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
