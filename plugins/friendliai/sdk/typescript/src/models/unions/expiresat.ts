import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Unix timestamp (in seconds) of when the file will expire. */
export type Expiresat = Date;

export const expiresatSchema: Schema<Expiresat> = s.of<Expiresat>(s.union([s.dateTime()]));
