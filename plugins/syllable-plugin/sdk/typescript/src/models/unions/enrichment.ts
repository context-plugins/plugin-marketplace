import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Full Twilio Lookup v2 line_type_intelligence payload resolved at ingestion (line_type /
 * carrier_name / mcc / mnc / error_code). None when no lookup was performed.
 */
export type Enrichment = Record<string, unknown>;

export const enrichmentSchema: Schema<Enrichment> = s.of<Enrichment>(
  s.union([s.record(s.string(), s.unknown())]),
);
