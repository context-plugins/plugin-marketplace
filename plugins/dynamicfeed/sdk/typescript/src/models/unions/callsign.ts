import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** filter by flight callsign, e.g. BAW123 */
export type Callsign = string;

export const callsignSchema: Schema<Callsign> = s.of<Callsign>(s.union([s.string()]));
