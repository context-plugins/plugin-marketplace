import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { treatmentParameterInputSchema, type TreatmentParameterInput } from "./treatment-parameter-input.js";

export type TreatmentInput = {
  /** The treatment name */
  name: string;
  /** Whether this treatment is the baseline to compare other treatments against */
  baseline: boolean;
  /** The percentage of traffic allocated to this treatment during the iteration */
  allocationPercent: string;
  /** Details on the flag and variation to use for this treatment */
  parameters: TreatmentParameterInput[];
};

export const treatmentInputSchema: Schema<TreatmentInput> = s.object<TreatmentInput>({
  name: s.string(),
  baseline: s.boolean(),
  allocationPercent: s.string(),
  parameters: s.array(s.lazy(() => treatmentParameterInputSchema)),
});
