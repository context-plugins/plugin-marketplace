import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The code of the state, county, or province for the address. Riskified expects the subdivision on
 * its own, without the country prefix used by ISO 3166-2.
 */
export type ProvinceCode = string;

export const provinceCodeSchema: Schema<ProvinceCode> = s.of<ProvinceCode>(s.union([s.string()]));
