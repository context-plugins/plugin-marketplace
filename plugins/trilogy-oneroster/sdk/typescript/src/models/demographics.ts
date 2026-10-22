import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sexSchema, type Sex } from "./sex.js";
import { statusSchema, type Status } from "./status.js";

/** Represents a student's demographics information. */
export type Demographics = {
  sourcedId: string;
  status: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  birthDate: string | null;
  sex: Sex | null;
  americanIndianOrAlaskaNative: string | null;
  asian: string | null;
  blackOrAfricanAmerican: string | null;
  nativeHawaiianOrOtherPacificIslander: string | null;
  white: string | null;
  demographicRaceTwoOrMoreRaces: string | null;
  hispanicOrLatinoEthnicity: string | null;
  countryOfBirthCode: string | null;
  stateOfBirthAbbreviation: string | null;
  cityOfBirth: string | null;
  publicSchoolResidenceStatus: string | null;
};

export const demographicsSchema: Schema<Demographics> = s.object<Demographics>({
  sourcedId: s.string(),
  status: statusSchema,
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  birthDate: s.nullable(s.string()),
  sex: s.nullable(s.lazy(() => sexSchema)),
  americanIndianOrAlaskaNative: s.nullable(s.string()),
  asian: s.nullable(s.string()),
  blackOrAfricanAmerican: s.nullable(s.string()),
  nativeHawaiianOrOtherPacificIslander: s.nullable(s.string()),
  white: s.nullable(s.string()),
  demographicRaceTwoOrMoreRaces: s.nullable(s.string()),
  hispanicOrLatinoEthnicity: s.nullable(s.string()),
  countryOfBirthCode: s.nullable(s.string()),
  stateOfBirthAbbreviation: s.nullable(s.string()),
  cityOfBirth: s.nullable(s.string()),
  publicSchoolResidenceStatus: s.nullable(s.string()),
});
