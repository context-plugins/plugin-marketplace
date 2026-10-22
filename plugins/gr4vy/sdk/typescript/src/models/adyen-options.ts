import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionaldataModelSchema, type AdditionaldataModel } from "./unions/additionaldata-model.js";

export type AdyenOptions = {
  /** Passes additional data to the Adyen API when creating a transaction. */
  additionalData?: AdditionaldataModel;
};

export const adyenOptionsSchema: Schema<AdyenOptions> = s.object<AdyenOptions>({
  additionalData: s.optional(s.lazy(() => additionaldataModelSchema)),
});
