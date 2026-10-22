import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PersonDistance = {
  /** The display name. */
  name: string;
  /** An opaque identifier that can be used to request metadata for a Person. */
  obfuscatedId: string;
  /** Distance to person, refer to PeopleDistance pipeline on interpretation of the value. */
  distance: number;
};

export const personDistanceSchema: Schema<PersonDistance> = s.object<PersonDistance>({
  name: s.string(),
  obfuscatedId: s.string(),
  distance: s.float64(),
});
