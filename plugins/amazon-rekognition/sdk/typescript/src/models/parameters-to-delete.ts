import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersToDelete = {
  ConnectedHomeMinConfidence: "ConnectedHomeMinConfidence",
  RegionsOfInterest: "RegionsOfInterest",
} as const;
export type ParametersToDelete = (typeof ParametersToDelete)[keyof typeof ParametersToDelete] | (string & {});

export const parametersToDeleteSchema: EnumSchema<ParametersToDelete> =
  s.enumOf<ParametersToDelete>(ParametersToDelete);
