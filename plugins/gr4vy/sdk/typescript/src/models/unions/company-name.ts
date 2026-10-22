import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The account holder's company name */
export type CompanyName = string;

export const companyNameSchema: Schema<CompanyName> = s.of<CompanyName>(s.union([s.string()]));
