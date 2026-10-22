import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Date and time of return in ISO 8601 format. */
export type Returndate = string;

export const returndateSchema: Schema<Returndate> = s.of<Returndate>(s.union([s.string()]));
