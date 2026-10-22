import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { dlocalCardOptionsSchema, type DlocalCardOptions } from "../dlocal-card-options.js";

/** Custom options to be passed to the `dlocal-card` connector. */
export type DlocalCard = DlocalCardOptions;

export const dlocalCardSchema: Schema<DlocalCard> = s.of<DlocalCard>(
  s.union([s.lazy(() => dlocalCardOptionsSchema)]),
);
