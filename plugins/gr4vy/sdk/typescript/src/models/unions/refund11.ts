import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  wpayPaytoResourceOptionsSchema,
  type WpayPaytoResourceOptions,
} from "../wpay-payto-resource-options.js";

/** Options to pass to the `refund` resource in the Wpay PayTo API. */
export type Refund11 = WpayPaytoResourceOptions;

export const refund11Schema: Schema<Refund11> = s.of<Refund11>(
  s.union([s.lazy(() => wpayPaytoResourceOptionsSchema)]),
);
