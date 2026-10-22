import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The standardized error code set by Gr4vy. */
export type Code2 = string;

export const code2Schema: Schema<Code2> = s.of<Code2>(s.union([s.string()]));
