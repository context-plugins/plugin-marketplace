import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  fiservInstallmentOptionsSchema,
  type FiservInstallmentOptions,
} from "../fiserv-installment-options.js";

/**
 * Passes installment data to the Fiserv API. This is now also a dedicated feature on the Gr4vy API.
 */
export type InstallmentOptions = FiservInstallmentOptions;

export const installmentOptionsSchema: Schema<InstallmentOptions> = s.of<InstallmentOptions>(
  s.union([s.lazy(() => fiservInstallmentOptionsSchema)]),
);
