import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fleetSchema, type Fleet } from "./fleet.js";

export type BatchGetFleetsOutput = {
  /** Information about the requested compute fleets. */
  fleets?: Fleet[];
  /** The names of compute fleets for which information could not be found. */
  fleetsNotFound?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetFleetsOutputSchema: Schema<BatchGetFleetsOutput> = s.object<BatchGetFleetsOutput>(
  {
    fleets: s.optional(s.array(s.lazy(() => fleetSchema))),
    fleetsNotFound: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
