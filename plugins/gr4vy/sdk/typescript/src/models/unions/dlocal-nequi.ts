import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { dlocalOptionsSchema, type DlocalOptions } from "../dlocal-options.js";

/** Custom options to be passed to the `dlocal-nequi` connector. */
export type DlocalNequi = DlocalOptions;

export const dlocalNequiSchema: Schema<DlocalNequi> = s.of<DlocalNequi>(
  s.union([s.lazy(() => dlocalOptionsSchema)]),
);
