import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  atifObservationResultInternalSchema,
  atifObservationResultSchema,
  type AtifObservationResult,
} from "./atif-observation-result.js";

export type AtifObservation = {
  results: AtifObservationResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const atifObservationProperties: s.Shape<AtifObservation> = {
  results: s.array(s.lazy(() => atifObservationResultInternalSchema)),
};

export const atifObservationInternalSchema: Schema<AtifObservation> = s.object<AtifObservation>(
  atifObservationProperties,
  { additionalProperties: s.json() },
);

export const atifObservationSchema: Schema<AtifObservation> = s.lazySchema(() =>
  s.object<AtifObservation>(
    {
      ...atifObservationProperties,
      results: s.array(s.lazy(() => atifObservationResultSchema)).check(s.maxLength(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
