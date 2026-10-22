import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The passenger's date of birth in YYYY-MM-YY format. */
export type DateOfBirth = string;

export const dateOfBirthSchema: Schema<DateOfBirth> = s.of<DateOfBirth>(s.union([s.dateOnly()]));
