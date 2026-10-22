import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Consumer-provided name of the contact person. */
export type Contactfullname = string;

export const contactfullnameSchema: Schema<Contactfullname> = s.of<Contactfullname>(s.union([s.string()]));
