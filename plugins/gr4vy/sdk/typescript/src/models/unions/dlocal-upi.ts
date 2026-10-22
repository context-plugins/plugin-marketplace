import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { dlocalUpiOptionsSchema, type DlocalUpiOptions } from "../dlocal-upi-options.js";

/** Custom options to be passed to the `dlocal-upi` connector. */
export type DlocalUpi = DlocalUpiOptions;

export const dlocalUpiSchema: Schema<DlocalUpi> = s.of<DlocalUpi>(
  s.union([s.lazy(() => dlocalUpiOptionsSchema)]),
);
