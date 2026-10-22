import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ISO response code. */
export type IsoResponseCode = string;

export const isoResponseCodeSchema: Schema<IsoResponseCode> = s.of<IsoResponseCode>(s.union([s.string()]));
