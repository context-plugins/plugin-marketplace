import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { dlocalOptionsSchema, type DlocalOptions } from "../dlocal-options.js";

/** Custom options to be passed to the `dlocal-gcash` connector. */
export type DlocalGcash = DlocalOptions;

export const dlocalGcashSchema: Schema<DlocalGcash> = s.of<DlocalGcash>(
  s.union([s.lazy(() => dlocalOptionsSchema)]),
);
