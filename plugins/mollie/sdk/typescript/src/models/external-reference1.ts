import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  refundExternalReferenceTypeResponseSchema,
  type RefundExternalReferenceTypeResponse,
} from "./refund-external-reference-type-response.js";

export type ExternalReference1 = {
  /** Specifies the reference type */
  type?: RefundExternalReferenceTypeResponse;
  /** Unique reference from the payment provider */
  id?: string;
};

export const externalReference1Schema: Schema<ExternalReference1> = s.object<ExternalReference1>({
  type: s.optional(s.lazy(() => refundExternalReferenceTypeResponseSchema)),
  id: s.optional(s.string()),
});
