import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { installmentOptionsSchema, type InstallmentOptions } from "./unions/installment-options.js";

export type FiservOptions = {
  /**
   * Passes installment data to the Fiserv API. This is now also a dedicated feature on the Gr4vy
   * API.
   */
  installmentOptions?: InstallmentOptions;
};

export const fiservOptionsSchema: Schema<FiservOptions> = s.object<FiservOptions>({
  installmentOptions: s.optional(s.lazy(() => installmentOptionsSchema)),
});
