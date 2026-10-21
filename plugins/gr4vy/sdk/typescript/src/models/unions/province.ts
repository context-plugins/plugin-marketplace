import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The state, county, or province for the address. */
export type Province = string;

export const provinceSchema: Schema<Province> = s.of<Province>(s.union([s.string()]));
