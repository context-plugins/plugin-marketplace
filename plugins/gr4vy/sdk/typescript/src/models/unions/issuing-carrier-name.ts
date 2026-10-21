import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** For airline aggregators, name of the airline issuing the ticket. */
export type IssuingCarrierName = string;

export const issuingCarrierNameSchema: Schema<IssuingCarrierName> = s.of<IssuingCarrierName>(
  s.union([s.string()]),
);
