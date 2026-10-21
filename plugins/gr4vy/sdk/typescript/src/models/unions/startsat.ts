import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Start date of the billing plan, in YYYY-MM-DD format. */
export type Startsat = string;

export const startsatSchema: Schema<Startsat> = s.of<Startsat>(s.union([s.string()]));
