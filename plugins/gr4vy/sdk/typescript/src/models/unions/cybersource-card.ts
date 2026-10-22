import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cybersourceOptionsSchema, type CybersourceOptions } from "../cybersource-options.js";

/** Custom options to be passed to the `cybersource-card` connector. */
export type CybersourceCard = CybersourceOptions;

export const cybersourceCardSchema: Schema<CybersourceCard> = s.of<CybersourceCard>(
  s.union([s.lazy(() => cybersourceOptionsSchema)]),
);
