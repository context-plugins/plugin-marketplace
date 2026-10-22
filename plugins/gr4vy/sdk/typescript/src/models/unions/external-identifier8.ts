import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant reference for this payment method. */
export type ExternalIdentifier8 = string;

export const externalIdentifier8Schema: Schema<ExternalIdentifier8> = s.of<ExternalIdentifier8>(
  s.union([s.string()]),
);
