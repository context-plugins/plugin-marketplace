import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes the `order.installmentOptions.installmentsInterest` field to the Fiserv API. */
export type Installmentsinterest = boolean;

export const installmentsinterestSchema: Schema<Installmentsinterest> = s.of<Installmentsinterest>(
  s.union([s.boolean()]),
);
