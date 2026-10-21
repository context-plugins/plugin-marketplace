import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Source of the session (e.g., for an inbound session, the user's phone number/username/email) */
export type Source2 = string;

export const source2Schema: Schema<Source2> = s.of<Source2>(s.union([s.string()]));
