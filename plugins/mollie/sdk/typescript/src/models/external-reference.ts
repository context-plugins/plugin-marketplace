import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  refundExternalReferenceTypeSchema,
  type RefundExternalReferenceType,
} from "./refund-external-reference-type.js";

export type ExternalReference = {
  /** Specifies the reference type */
  type?: RefundExternalReferenceType;
  /** Unique reference from the payment provider */
  id?: string;
};

export const externalReferenceSchema: Schema<ExternalReference> = s.object<ExternalReference>({
  type: s.optional(s.lazy(() => refundExternalReferenceTypeSchema)),
  id: s.optional(s.string()),
});
