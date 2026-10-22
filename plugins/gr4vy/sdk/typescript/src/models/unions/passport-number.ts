import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The passenger's unique passport number. */
export type PassportNumber = string;

export const passportNumberSchema: Schema<PassportNumber> = s.of<PassportNumber>(s.union([s.string()]));
