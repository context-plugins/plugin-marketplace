import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createdBySchema, type CreatedBy } from "./created-by.js";
import {
  documentJuriSignTemplatesApiSchema,
  type DocumentJuriSignTemplatesApi,
} from "./document-juri-sign-templates-api.js";
import {
  signatureZoneJuriSignTemplatesApiSchema,
  type SignatureZoneJuriSignTemplatesApi,
} from "./signature-zone-juri-sign-templates-api.js";
import {
  signerJuriSignTemplatesApiSchema,
  type SignerJuriSignTemplatesApi,
} from "./signer-juri-sign-templates-api.js";
import {
  signingOrderTypeJuriSignTemplatesApiSchema,
  type SigningOrderTypeJuriSignTemplatesApi,
} from "./signing-order-type-juri-sign-templates-api.js";

export type TemplateDetailed = {
  id?: string;
  name?: string;
  description?: string | null;
  subject?: string;
  signingOrderType?: SigningOrderTypeJuriSignTemplatesApi;
  expiryHours?: number;
  requireSelfie?: boolean;
  requiresParaph?: boolean;
  signerCount?: number;
  hasDocument?: boolean;
  usageCount?: number;
  lastUsedAt?: Date | null;
  createdAt?: Date;
  createdBy?: CreatedBy;
  message?: string | null;
  signers?: SignerJuriSignTemplatesApi[];
  zones?: SignatureZoneJuriSignTemplatesApi[];
  document?: DocumentJuriSignTemplatesApi | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const templateDetailedSchema: Schema<TemplateDetailed> = s.object<TemplateDetailed>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optionalNullable(s.string()),
    subject: s.optional(s.string()),
    signingOrderType: s.optional(s.lazy(() => signingOrderTypeJuriSignTemplatesApiSchema)),
    expiryHours: s.optional(s.int()),
    requireSelfie: s.optional(s.boolean()),
    requiresParaph: s.optional(s.boolean()),
    signerCount: s.optional(s.int()),
    hasDocument: s.optional(s.boolean()),
    usageCount: s.optional(s.int()),
    lastUsedAt: s.optionalNullable(s.dateTime()),
    createdAt: s.optional(s.dateTime()),
    createdBy: s.optional(s.lazy(() => createdBySchema)),
    message: s.optionalNullable(s.string()),
    signers: s.optional(s.array(s.lazy(() => signerJuriSignTemplatesApiSchema))),
    zones: s.optional(s.array(s.lazy(() => signatureZoneJuriSignTemplatesApiSchema))),
    document: s.optionalNullable(s.lazy(() => documentJuriSignTemplatesApiSchema)),
    _keysMap: {
      signingOrderType: "signing_order_type",
      expiryHours: "expiry_hours",
      requireSelfie: "require_selfie",
      requiresParaph: "requires_paraph",
      signerCount: "signer_count",
      hasDocument: "has_document",
      usageCount: "usage_count",
      lastUsedAt: "last_used_at",
      createdAt: "created_at",
      createdBy: "created_by",
    },
  },
  { additionalProperties: s.json() },
);
