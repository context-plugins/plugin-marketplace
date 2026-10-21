import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fieldSchema, type Field } from "./field.js";
import { paymentServiceId7Schema, type PaymentServiceId7 } from "./unions/payment-service-id7.js";

export type VerifyCredentials = {
  /** The ID of the payment service definition to verify the fields against */
  paymentServiceDefinitionId: string;
  /**
   * The optional ID of the configured payment service. New fields will be merged with any existing
   * fields already stored before they are verified.
   */
  paymentServiceId?: PaymentServiceId7;
  /** The fields and their values, or a set of updated fields to merge with existing values. */
  fields: Field[];
};

export const verifyCredentialsSchema: Schema<VerifyCredentials> = s.object<VerifyCredentials>({
  paymentServiceDefinitionId: s.string(),
  paymentServiceId: s.optional(s.lazy(() => paymentServiceId7Schema)),
  fields: s.array(s.lazy(() => fieldSchema)),
  _keysMap: {
    paymentServiceDefinitionId: "payment_service_definition_id",
    paymentServiceId: "payment_service_id",
  },
});
