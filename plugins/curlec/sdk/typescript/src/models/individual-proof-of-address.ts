import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type1RazorpayPartnerDocumentsApiSchema,
  type Type1RazorpayPartnerDocumentsApi,
} from "./type1-razorpay-partner-documents-api.js";

export type IndividualProofOfAddress = {
  type?: Type1RazorpayPartnerDocumentsApi;
  url?: string;
  documentId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const individualProofOfAddressSchema: Schema<IndividualProofOfAddress> =
  s.object<IndividualProofOfAddress>(
    {
      type: s.optional(s.lazy(() => type1RazorpayPartnerDocumentsApiSchema)),
      url: s.optional(s.string()),
      documentId: s.optional(s.string()),
      _keysMap: {
        documentId: "document_id",
      },
    },
    { additionalProperties: s.json() },
  );
