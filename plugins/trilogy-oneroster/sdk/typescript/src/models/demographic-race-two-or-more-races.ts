import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DemographicRaceTwoOrMoreRaces = {
  True: "true",
  False: "false",
} as const;
export type DemographicRaceTwoOrMoreRaces =
  | (typeof DemographicRaceTwoOrMoreRaces)[keyof typeof DemographicRaceTwoOrMoreRaces]
  | (string & {});

export const demographicRaceTwoOrMoreRacesSchema: EnumSchema<DemographicRaceTwoOrMoreRaces> =
  s.enumOf<DemographicRaceTwoOrMoreRaces>(DemographicRaceTwoOrMoreRaces);
