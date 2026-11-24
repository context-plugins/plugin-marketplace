import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type2RazorpayPartnerDocumentsApiSchema,
  type Type2RazorpayPartnerDocumentsApi,
} from "./type2-razorpay-partner-documents-api.js";

export type IndividualProofOfIdentification = {
  type?: Type2RazorpayPartnerDocumentsApi;
  url?: string;
  documentId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const individualProofOfIdentificationSchema: Schema<IndividualProofOfIdentification> =
  s.object<IndividualProofOfIdentification>(
    {
      type: s.optional(s.lazy(() => type2RazorpayPartnerDocumentsApiSchema)),
      url: s.optional(s.string()),
      documentId: s.optional(s.string()),
      _keysMap: {
        documentId: "document_id",
      },
    },
    { additionalProperties: s.json() },
  );
