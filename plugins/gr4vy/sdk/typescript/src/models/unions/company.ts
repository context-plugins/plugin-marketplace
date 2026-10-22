import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Company name associated with the beneficiary's address. */
export type Company = string;

export const companySchema: Schema<Company> = s.of<Company>(s.union([s.string()]));
