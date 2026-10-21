import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** For airline aggregators, three-character IATA code of the airline issuing the ticket. */
export type IssuingCarrierCode = string;

export const issuingCarrierCodeSchema: Schema<IssuingCarrierCode> = s.of<IssuingCarrierCode>(
  s.union([s.string()]),
);
