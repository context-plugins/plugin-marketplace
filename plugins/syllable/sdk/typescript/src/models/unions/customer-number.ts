import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Customer number associated with the uploaded file */
export type CustomerNumber = string;

export const customerNumberSchema: Schema<CustomerNumber> = s.of<CustomerNumber>(s.union([s.string()]));
