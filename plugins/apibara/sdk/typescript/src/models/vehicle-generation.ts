import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Resolved vehicle generation metadata when the source vehicle can be matched unambiguously. */
export type VehicleGeneration = {
  id?: number;
  name?: string;
  generation?: string;
  make?: string;
  model?: string;
  yearFrom?: number;
  yearTo?: number | null;
  label?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vehicleGenerationSchema: Schema<VehicleGeneration> = s.object<VehicleGeneration>(
  {
    id: s.optional(s.int()),
    name: s.optional(s.string()),
    generation: s.optional(s.string()),
    make: s.optional(s.string()),
    model: s.optional(s.string()),
    yearFrom: s.optional(s.int()),
    yearTo: s.optionalNullable(s.int()),
    label: s.optional(s.string()),
    _keysMap: {
      yearFrom: "year_from",
      yearTo: "year_to",
    },
  },
  { additionalProperties: s.json() },
);
