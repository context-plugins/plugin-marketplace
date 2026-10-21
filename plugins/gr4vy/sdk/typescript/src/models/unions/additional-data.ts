import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Additional Set Transaction Context Values (STC) to be sent to PayPal as part of the transaction.
 */
export type AdditionalData = string[];

export const additionalDataSchema: Schema<AdditionalData> = s.of<AdditionalData>(
  s.union([s.array(s.string())]),
);
