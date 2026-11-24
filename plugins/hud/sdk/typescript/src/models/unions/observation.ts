import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  atifObservationInternalSchema,
  atifObservationSchema,
  type AtifObservation,
} from "../atif-observation.js";

export type Observation = AtifObservation;

export const observationInternalSchema: Schema<Observation> = s.of<Observation>(
  s.union([s.lazy(() => atifObservationInternalSchema)]),
);

export const observationSchema: Schema<Observation> = s.lazySchema(() =>
  s.of<Observation>(s.union([s.lazy(() => atifObservationSchema)])),
);
