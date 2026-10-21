import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** General data about the customer provided by the merchant. */
export type Customdata = string;

export const customdataSchema: Schema<Customdata> = s.of<Customdata>(s.union([s.string()]));
