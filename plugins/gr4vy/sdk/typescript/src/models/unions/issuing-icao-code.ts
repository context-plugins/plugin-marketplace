import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** For airline aggregators, three-character ICAO code of the airline issuing the ticket. */
export type IssuingIcaoCode = string;

export const issuingIcaoCodeSchema: Schema<IssuingIcaoCode> = s.of<IssuingIcaoCode>(s.union([s.string()]));
