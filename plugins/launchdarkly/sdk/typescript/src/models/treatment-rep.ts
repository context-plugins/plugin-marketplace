import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parameterRepSchema, type ParameterRep } from "./parameter-rep.js";

export type TreatmentRep = {
  /** The treatment ID. This is the variation ID from the flag. */
  id?: string;
  /** The treatment name. This is the variation name from the flag. */
  name: string;
  /** The percentage of traffic allocated to this treatment during the iteration */
  allocationPercent: string;
  /** Whether this treatment is the baseline to compare other treatments against */
  baseline?: boolean;
  /** Details on the flag and variation used for this treatment */
  parameters?: ParameterRep[];
};

export const treatmentRepSchema: Schema<TreatmentRep> = s.object<TreatmentRep>({
  id: s.optional(s.string()),
  name: s.string(),
  allocationPercent: s.string(),
  baseline: s.optional(s.boolean()),
  parameters: s.optional(s.array(s.lazy(() => parameterRepSchema))),
  _keysMap: {
    id: "_id",
  },
});
