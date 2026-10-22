import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The code of state, county, or province for the address in ISO 3166-2 format. */
export type StateCode = string;

export const stateCodeSchema: Schema<StateCode> = s.of<StateCode>(s.union([s.string()]));
