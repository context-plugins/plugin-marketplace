import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The postal code of the buyer. */
export type PostalCode1 = string;

export const postalCode1Schema: Schema<PostalCode1> = s.of<PostalCode1>(s.union([s.string()]));
