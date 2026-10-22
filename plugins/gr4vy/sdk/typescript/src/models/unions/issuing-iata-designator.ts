import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** For airline aggregators, two-character IATA code of the airline issuing the ticket. */
export type IssuingIataDesignator = string;

export const issuingIataDesignatorSchema: Schema<IssuingIataDesignator> = s.of<IssuingIataDesignator>(
  s.union([s.string()]),
);
