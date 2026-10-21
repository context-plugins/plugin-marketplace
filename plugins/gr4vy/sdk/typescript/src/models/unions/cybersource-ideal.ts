import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cybersourceOptionsSchema, type CybersourceOptions } from "../cybersource-options.js";

/** Custom options to be passed to the `cybersource-ideal` connector. */
export type CybersourceIdeal = CybersourceOptions;

export const cybersourceIdealSchema: Schema<CybersourceIdeal> = s.of<CybersourceIdeal>(
  s.union([s.lazy(() => cybersourceOptionsSchema)]),
);
