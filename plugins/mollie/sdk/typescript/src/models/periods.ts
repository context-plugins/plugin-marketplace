import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { costSchema, type Cost } from "./cost.js";
import { revenueSchema, type Revenue } from "./revenue.js";

export type Periods = {
  /**
   * An array of cost objects, describing the fees withheld for each payment method during this
   * period.
   */
  costs?: Cost[];
  /**
   * An array of revenue objects containing the total revenue for each payment method during this
   * period.
   */
  revenue?: Revenue[];
  /** The ID of the invoice created for this period, if the invoice has been created already. */
  invoiceId?: string;
  /** The invoice reference, if the invoice has been created already. */
  invoiceReference?: string | null;
};

export const periodsSchema: Schema<Periods> = s.object<Periods>({
  costs: s.optional(s.array(s.lazy(() => costSchema))),
  revenue: s.optional(s.array(s.lazy(() => revenueSchema))),
  invoiceId: s.optional(s.string()),
  invoiceReference: s.optionalNullable(s.string()),
});
