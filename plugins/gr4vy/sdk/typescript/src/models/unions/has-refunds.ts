import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters for transactions with refunds. */
export type HasRefunds = boolean;

export const hasRefundsSchema: Schema<HasRefunds> = s.of<HasRefunds>(s.union([s.boolean()]));
