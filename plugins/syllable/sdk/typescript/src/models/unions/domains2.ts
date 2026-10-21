import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Comma-delimited list of domains that users at the organization may have in their email addresses.
 */
export type Domains2 = string;

export const domains2Schema: Schema<Domains2> = s.of<Domains2>(s.union([s.string()]));
