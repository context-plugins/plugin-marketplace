import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { engagementsSchema, type Engagements } from "./engagements.js";
import { unitSchema, type Unit } from "./unit.js";

export type TotalEngagements = {
  engagements?: Engagements[];
  units?: number;
  unit?: Unit;
  unitReference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const totalEngagementsSchema: Schema<TotalEngagements> = s.object<TotalEngagements>(
  {
    engagements: s.optional(s.array(s.lazy(() => engagementsSchema))),
    units: s.optional(s.int()),
    unit: s.optional(s.lazy(() => unitSchema)),
    unitReference: s.optional(s.string()),
    _keysMap: {
      unitReference: "unit_reference",
    },
  },
  { additionalProperties: s.json() },
);
