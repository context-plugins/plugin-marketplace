import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authorizationBehaviorSchema, type AuthorizationBehavior } from "./authorization-behavior.js";
import { certificateAuthoritySchema, type CertificateAuthority } from "./certificate-authority.js";
import { contactSchema, type Contact } from "./contact.js";
import {
  statusAwsCertificateManagerAcmeEndpointApiSchema,
  type StatusAwsCertificateManagerAcmeEndpointApi,
} from "./status-aws-certificate-manager-acme-endpoint-api.js";
import { tagSchema, type Tag } from "./tag.js";

export type AcmeEndpointSummary = {
  /** The Amazon Resource Name (ARN) of the ACME endpoint. */
  acmeEndpointArn?: string;
  /** The URL of the ACME endpoint. */
  endpointUrl?: string;
  /** The status of the ACME endpoint. */
  status?: StatusAwsCertificateManagerAcmeEndpointApi;
  /** The reason the ACME endpoint failed, if applicable. */
  failureReason?: string;
  /** The authorization behavior of the ACME endpoint. */
  authorizationBehavior?: AuthorizationBehavior;
  /** Whether ACME clients must provide contact information during account registration. */
  contact?: Contact;
  /** Exactly one member is set. */
  certificateAuthority?: CertificateAuthority;
  /** Tags applied to certificates issued through this ACME endpoint. */
  certificateTags?: Tag[];
  /** The time at which the ACME endpoint was created. */
  createdAt?: string;
  /** The time at which the ACME endpoint was last updated. */
  updatedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const acmeEndpointSummarySchema: Schema<AcmeEndpointSummary> = s.object<AcmeEndpointSummary>(
  {
    acmeEndpointArn: s.optional(s.string()),
    endpointUrl: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusAwsCertificateManagerAcmeEndpointApiSchema)),
    failureReason: s.optional(s.string()),
    authorizationBehavior: s.optional(s.lazy(() => authorizationBehaviorSchema)),
    contact: s.optional(s.lazy(() => contactSchema)),
    certificateAuthority: s.optional(s.lazy(() => certificateAuthoritySchema)),
    certificateTags: s.optional(s.array(s.lazy(() => tagSchema))),
    createdAt: s.optional(s.string()),
    updatedAt: s.optional(s.string()),
    _keysMap: {
      acmeEndpointArn: "AcmeEndpointArn",
      endpointUrl: "EndpointUrl",
      status: "Status",
      failureReason: "FailureReason",
      authorizationBehavior: "AuthorizationBehavior",
      contact: "Contact",
      certificateAuthority: "CertificateAuthority",
      certificateTags: "CertificateTags",
      createdAt: "CreatedAt",
      updatedAt: "UpdatedAt",
    },
  },
  { additionalProperties: s.json() },
);
