import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { dlocalPixOptionsSchema, type DlocalPixOptions } from "../dlocal-pix-options.js";

/** Custom options to be passed to the `dlocal-pix` connector. */
export type DlocalPix = DlocalPixOptions;

export const dlocalPixSchema: Schema<DlocalPix> = s.of<DlocalPix>(
  s.union([s.lazy(() => dlocalPixOptionsSchema)]),
);
