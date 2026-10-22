import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Customer code or reference. */
export type CustomerReferenceNumber = string;

export const customerReferenceNumberSchema: Schema<CustomerReferenceNumber> = s.of<CustomerReferenceNumber>(
  s.union([s.string()]),
);
