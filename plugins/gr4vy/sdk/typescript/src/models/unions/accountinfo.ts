import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes `accountInfo` data to Adyen. */
export type Accountinfo = Record<string, unknown>;

export const accountinfoSchema: Schema<Accountinfo> = s.of<Accountinfo>(
  s.union([s.record(s.string(), s.unknown())]),
);
