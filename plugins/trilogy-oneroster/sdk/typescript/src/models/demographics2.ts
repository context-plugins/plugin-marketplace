import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  americanIndianOrAlaskaNativeSchema,
  type AmericanIndianOrAlaskaNative,
} from "./american-indian-or-alaska-native.js";
import { asianSchema, type Asian } from "./asian.js";
import { blackOrAfricanAmericanSchema, type BlackOrAfricanAmerican } from "./black-or-african-american.js";
import {
  demographicRaceTwoOrMoreRacesSchema,
  type DemographicRaceTwoOrMoreRaces,
} from "./demographic-race-two-or-more-races.js";
import {
  hispanicOrLatinoEthnicitySchema,
  type HispanicOrLatinoEthnicity,
} from "./hispanic-or-latino-ethnicity.js";
import {
  nativeHawaiianOrOtherPacificIslanderSchema,
  type NativeHawaiianOrOtherPacificIslander,
} from "./native-hawaiian-or-other-pacific-islander.js";
import { sex2Schema, type Sex2 } from "./sex2.js";
import { Status, statusSchema } from "./status.js";
import { whiteSchema, type White } from "./white.js";

export type Demographics2 = {
  sourcedId: string;
  /** @default Status.Active */
  status?: Status;
  metadata?: Record<string, Record<string, unknown>>;
  birthDate?: string | null;
  sex?: Sex2 | null;
  americanIndianOrAlaskaNative?: AmericanIndianOrAlaskaNative | null;
  asian?: Asian | null;
  blackOrAfricanAmerican?: BlackOrAfricanAmerican | null;
  nativeHawaiianOrOtherPacificIslander?: NativeHawaiianOrOtherPacificIslander | null;
  white?: White | null;
  demographicRaceTwoOrMoreRaces?: DemographicRaceTwoOrMoreRaces | null;
  hispanicOrLatinoEthnicity?: HispanicOrLatinoEthnicity | null;
  countryOfBirthCode?: string | null;
  stateOfBirthAbbreviation?: string | null;
  cityOfBirth?: string | null;
  publicSchoolResidenceStatus?: string | null;
};

export const demographics2Schema: Schema<Demographics2> = s.object<Demographics2>({
  sourcedId: s.string(),
  status: s.defaulted(statusSchema, Status.Active),
  metadata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  birthDate: s.optionalNullable(s.string()),
  sex: s.optionalNullable(s.lazy(() => sex2Schema)),
  americanIndianOrAlaskaNative: s.optionalNullable(s.lazy(() => americanIndianOrAlaskaNativeSchema)),
  asian: s.optionalNullable(s.lazy(() => asianSchema)),
  blackOrAfricanAmerican: s.optionalNullable(s.lazy(() => blackOrAfricanAmericanSchema)),
  nativeHawaiianOrOtherPacificIslander: s.optionalNullable(
    s.lazy(() => nativeHawaiianOrOtherPacificIslanderSchema),
  ),
  white: s.optionalNullable(s.lazy(() => whiteSchema)),
  demographicRaceTwoOrMoreRaces: s.optionalNullable(s.lazy(() => demographicRaceTwoOrMoreRacesSchema)),
  hispanicOrLatinoEthnicity: s.optionalNullable(s.lazy(() => hispanicOrLatinoEthnicitySchema)),
  countryOfBirthCode: s.optionalNullable(s.string()),
  stateOfBirthAbbreviation: s.optionalNullable(s.string()),
  cityOfBirth: s.optionalNullable(s.string()),
  publicSchoolResidenceStatus: s.optionalNullable(s.string()),
});
