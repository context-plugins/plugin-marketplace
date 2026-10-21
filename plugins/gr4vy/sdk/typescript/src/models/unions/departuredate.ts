import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Date and time of departure in ISO 8601 format. */
export type Departuredate = string;

export const departuredateSchema: Schema<Departuredate> = s.of<Departuredate>(s.union([s.string()]));
