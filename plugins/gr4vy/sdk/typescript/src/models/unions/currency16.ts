import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ISO 4217 currency code (3 characters) to filter 3DS configurations. */
export type Currency16 = string;

export const currency16Schema: Schema<Currency16> = s.of<Currency16>(s.union([s.string()]));
