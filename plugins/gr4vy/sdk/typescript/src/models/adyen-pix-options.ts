import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionaldataModelSchema, type AdditionaldataModel } from "./unions/additionaldata-model.js";
import { pixRecurringSchema, type PixRecurring } from "./unions/pix-recurring.js";

export type AdyenPixOptions = {
  /** Passes additional data to the Adyen API when creating a transaction. */
  additionalData?: AdditionaldataModel;
  /** Passes `pixRecurring` data to Adyen */
  pixRecurring?: PixRecurring;
};

export const adyenPixOptionsSchema: Schema<AdyenPixOptions> = s.object<AdyenPixOptions>({
  additionalData: s.optional(s.lazy(() => additionaldataModelSchema)),
  pixRecurring: s.optional(s.lazy(() => pixRecurringSchema)),
});
