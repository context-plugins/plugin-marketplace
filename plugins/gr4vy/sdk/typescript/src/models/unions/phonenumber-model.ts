import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Consumer phone number for checkout flow optimization. */
export type PhonenumberModel = string;

export const phonenumberModelSchema: Schema<PhonenumberModel> = s.of<PhonenumberModel>(s.union([s.string()]));
