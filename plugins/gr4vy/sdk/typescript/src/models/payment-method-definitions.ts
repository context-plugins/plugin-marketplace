import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentMethodDefinitionSchema, type PaymentMethodDefinition } from "./payment-method-definition.js";

export type PaymentMethodDefinitions = {
  /** A list of items returned for this request. */
  items: PaymentMethodDefinition[];
};

export const paymentMethodDefinitionsSchema: Schema<PaymentMethodDefinitions> =
  s.object<PaymentMethodDefinitions>({
    items: s.array(s.lazy(() => paymentMethodDefinitionSchema)),
  });
