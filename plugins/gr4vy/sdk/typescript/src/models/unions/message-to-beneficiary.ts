import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Message intended for the beneficiary of the item. */
export type MessageToBeneficiary = string;

export const messageToBeneficiarySchema: Schema<MessageToBeneficiary> = s.of<MessageToBeneficiary>(
  s.union([s.string()]),
);
