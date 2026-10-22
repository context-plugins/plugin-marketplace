import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant identifier for this payment method. */
export type ExternalIdentifier = string;

export const externalIdentifierSchema: Schema<ExternalIdentifier> = s.of<ExternalIdentifier>(
  s.union([s.string()]),
);
