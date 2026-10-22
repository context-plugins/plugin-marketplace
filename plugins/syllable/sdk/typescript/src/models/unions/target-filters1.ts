import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { targetFiltersSchema, type TargetFilters } from "../target-filters.js";

/**
 * Generic target filter (a flat rule list over request enrichment attributes such as line_type,
 * caller_type, caller_name, carrier_name, mcc, mnc). When set, takes precedence over
 * allowed_line_types / include_unknown_line_types. Omitted or null means those legacy fields are
 * used instead. Rules on caller_type / caller_name are resolved by Twilio's separately billed
 * caller_name (CNAM) lookup, which only returns data for US numbers.
 */
export type TargetFilters1 = TargetFilters;

export const targetFilters1Schema: Schema<TargetFilters1> = s.of<TargetFilters1>(
  s.union([s.lazy(() => targetFiltersSchema)]),
);
