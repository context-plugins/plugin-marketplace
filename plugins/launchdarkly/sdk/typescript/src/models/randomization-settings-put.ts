import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { randomizationUnitInputSchema, type RandomizationUnitInput } from "./randomization-unit-input.js";

export type RandomizationSettingsPut = {
  /** An array of randomization units allowed for this project. */
  randomizationUnits: RandomizationUnitInput[];
};

export const randomizationSettingsPutSchema: Schema<RandomizationSettingsPut> =
  s.object<RandomizationSettingsPut>({
    randomizationUnits: s.array(s.lazy(() => randomizationUnitInputSchema)),
  });
