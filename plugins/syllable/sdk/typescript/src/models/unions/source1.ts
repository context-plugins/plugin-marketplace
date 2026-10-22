import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Source phone number, email, or SMS number */
export type Source1 = string;

export const source1Schema: Schema<Source1> = s.of<Source1>(s.union([s.string()]));
