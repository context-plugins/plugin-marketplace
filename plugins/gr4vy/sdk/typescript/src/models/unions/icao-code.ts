import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Three-character ICAO code of the airline. */
export type IcaoCode = string;

export const icaoCodeSchema: Schema<IcaoCode> = s.of<IcaoCode>(s.union([s.string()]));
