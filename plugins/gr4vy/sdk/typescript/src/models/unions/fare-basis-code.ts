import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The alphanumeric code for the booking class of a ticket. */
export type FareBasisCode = string;

export const fareBasisCodeSchema: Schema<FareBasisCode> = s.of<FareBasisCode>(s.union([s.string()]));
