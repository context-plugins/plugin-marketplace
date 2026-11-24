import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeRazorpayPartnerDocumentsApiSchema,
  type TypeRazorpayPartnerDocumentsApi,
} from "./type-razorpay-partner-documents-api.js";

export type BusinessProofOfIdentification = {
  type?: TypeRazorpayPartnerDocumentsApi;
  documentId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const businessProofOfIdentificationSchema: Schema<BusinessProofOfIdentification> =
  s.object<BusinessProofOfIdentification>(
    {
      type: s.optional(s.lazy(() => typeRazorpayPartnerDocumentsApiSchema)),
      documentId: s.optional(s.string()),
      _keysMap: {
        documentId: "document_id",
      },
    },
    { additionalProperties: s.json() },
  );
