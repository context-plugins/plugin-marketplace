import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Departure tax amount charged by a country when a person is leaving the country. */
export type DepartureTaxAmount = number;

export const departureTaxAmountSchema: Schema<DepartureTaxAmount> = s.of<DepartureTaxAmount>(
  s.union([s.int()]),
);
