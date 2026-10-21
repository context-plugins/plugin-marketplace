import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The unique hash derived from the card number. */
export type Fingerprint = string;

export const fingerprintSchema: Schema<Fingerprint> = s.of<Fingerprint>(s.union([s.string()]));
