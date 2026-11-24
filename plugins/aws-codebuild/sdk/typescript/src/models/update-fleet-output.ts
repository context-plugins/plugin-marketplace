import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fleetSchema, type Fleet } from "./fleet.js";

export type UpdateFleetOutput = {
  fleet?: Fleet;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateFleetOutputSchema: Schema<UpdateFleetOutput> = s.object<UpdateFleetOutput>(
  {
    fleet: s.optional(s.lazy(() => fleetSchema)),
  },
  { additionalProperties: s.json() },
);
