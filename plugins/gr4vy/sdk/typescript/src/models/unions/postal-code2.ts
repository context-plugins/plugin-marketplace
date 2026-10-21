import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant's postal code or zip code. */
export type PostalCode2 = string;

export const postalCode2Schema: Schema<PostalCode2> = s.of<PostalCode2>(s.union([s.string()]));
