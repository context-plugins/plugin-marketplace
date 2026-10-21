import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only the buyers for which the `external_identifier` matches this value.
 */
export type ExternalIdentifier41 = string;

export const externalIdentifier41Schema: Schema<ExternalIdentifier41> = s.of<ExternalIdentifier41>(
  s.union([s.string()]),
);
