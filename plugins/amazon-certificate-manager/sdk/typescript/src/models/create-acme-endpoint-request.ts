import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { certificateAuthoritySchema, type CertificateAuthority } from "./certificate-authority.js";
import { contact2Schema, type Contact2 } from "./contact2.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateAcmeEndpointRequest = {
  /** A unique, case-sensitive identifier to ensure idempotency of the request. */
  idempotencyToken?: string;
  /** The authorization behavior for the ACME endpoint. @default "PRE_APPROVED" */
  authorizationBehavior?: "PRE_APPROVED";
  /**
   * Specifies whether ACME clients must provide contact information during account registration.
   */
  contact?: Contact2;
  /** Exactly one member is set. */
  certificateAuthority: CertificateAuthority;
  /** One or more tags to associate with the ACME endpoint. */
  tags?: Tag[];
  /** Tags to apply to certificates issued through this ACME endpoint. */
  certificateTags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createAcmeEndpointRequestSchema: Schema<CreateAcmeEndpointRequest> =
  s.object<CreateAcmeEndpointRequest>(
    {
      idempotencyToken: s.optional(s.string()),
      authorizationBehavior: s.defaulted(s.literal("PRE_APPROVED"), "PRE_APPROVED"),
      contact: s.optional(s.lazy(() => contact2Schema)),
      certificateAuthority: certificateAuthoritySchema,
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      certificateTags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        idempotencyToken: "IdempotencyToken",
        authorizationBehavior: "AuthorizationBehavior",
        contact: "Contact",
        certificateAuthority: "CertificateAuthority",
        tags: "Tags",
        certificateTags: "CertificateTags",
      },
    },
    { additionalProperties: s.json() },
  );
