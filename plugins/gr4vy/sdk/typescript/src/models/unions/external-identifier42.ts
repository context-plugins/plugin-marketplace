import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters the results to only the items for which the `external_identifier` matches this value. */
export type ExternalIdentifier42 = string;

export const externalIdentifier42Schema: Schema<ExternalIdentifier42> = s.of<ExternalIdentifier42>(
  s.union([s.string()]),
);
