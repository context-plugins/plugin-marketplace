import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only the payouts that have an `external_identifier` that exactly matches
 * this value.
 */
export type ExternalIdentifier43 = string;

export const externalIdentifier43Schema: Schema<ExternalIdentifier43> = s.of<ExternalIdentifier43>(
  s.union([s.string()]),
);
