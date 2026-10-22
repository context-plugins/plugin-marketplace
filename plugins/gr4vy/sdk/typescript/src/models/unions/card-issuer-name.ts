import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The card issuer. */
export type CardIssuerName = string;

export const cardIssuerNameSchema: Schema<CardIssuerName> = s.of<CardIssuerName>(s.union([s.string()]));
