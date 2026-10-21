import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CardIssuerName1 = string;

export const cardIssuerName1Schema: Schema<CardIssuerName1> = s.of<CardIssuerName1>(s.union([s.string()]));
