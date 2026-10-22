import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The date of birth of the recipient. */
export type DateOfBirth1 = string;

export const dateOfBirth1Schema: Schema<DateOfBirth1> = s.of<DateOfBirth1>(s.union([s.dateOnly()]));
