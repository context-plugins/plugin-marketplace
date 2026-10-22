import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes the `order.installmentOptions.numberOfInstallments` field to the Fiserv API. */
export type Numberofinstallments = number;

export const numberofinstallmentsSchema: Schema<Numberofinstallments> = s.of<Numberofinstallments>(
  s.union([s.int()]),
);
