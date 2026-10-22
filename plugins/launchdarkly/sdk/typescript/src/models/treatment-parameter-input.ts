import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TreatmentParameterInput = {
  /** The flag key */
  flagKey: string;
  /** The ID of the flag variation */
  variationId: string;
};

export const treatmentParameterInputSchema: Schema<TreatmentParameterInput> =
  s.object<TreatmentParameterInput>({
    flagKey: s.string(),
    variationId: s.string(),
  });
