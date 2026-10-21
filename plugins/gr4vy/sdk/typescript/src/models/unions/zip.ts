import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Zip or postal code of the beneficiary's address. */
export type Zip = string;

export const zipSchema: Schema<Zip> = s.of<Zip>(s.union([s.string()]));
