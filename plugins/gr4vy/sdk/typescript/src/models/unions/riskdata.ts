import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes `riskData.customFields` to Adyen. */
export type Riskdata = Record<string, unknown>;

export const riskdataSchema: Schema<Riskdata> = s.of<Riskdata>(s.union([s.record(s.string(), s.unknown())]));
