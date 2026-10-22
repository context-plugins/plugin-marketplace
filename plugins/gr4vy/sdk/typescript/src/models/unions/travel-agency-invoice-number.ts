import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The reference number of the invoice that was issued by the travel agency. */
export type TravelAgencyInvoiceNumber = string;

export const travelAgencyInvoiceNumberSchema: Schema<TravelAgencyInvoiceNumber> =
  s.of<TravelAgencyInvoiceNumber>(s.union([s.string()]));
