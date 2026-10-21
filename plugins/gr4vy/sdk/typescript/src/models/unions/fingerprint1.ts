import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The unique hash derived from the payment method identifier (e.g. card number). */
export type Fingerprint1 = string;

export const fingerprint1Schema: Schema<Fingerprint1> = s.of<Fingerprint1>(s.union([s.string()]));
