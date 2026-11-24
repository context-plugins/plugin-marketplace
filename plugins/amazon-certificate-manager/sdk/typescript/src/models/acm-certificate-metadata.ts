import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  certificateKeyPairOriginSchema,
  type CertificateKeyPairOrigin,
} from "./certificate-key-pair-origin.js";
import { exportOptionSchema, type ExportOption } from "./export-option.js";
import { managedBySchema, type ManagedBy } from "./managed-by.js";
import { renewalEligibilitySchema, type RenewalEligibility } from "./renewal-eligibility.js";
import { renewalStatusSchema, type RenewalStatus } from "./renewal-status.js";
import {
  statusAwsCertificateManagerCertificatesApiSchema,
  type StatusAwsCertificateManagerCertificatesApi,
} from "./status-aws-certificate-manager-certificates-api.js";
import {
  typeAwsCertificateManagerCertificatesApiSchema,
  type TypeAwsCertificateManagerCertificatesApi,
} from "./type-aws-certificate-manager-certificates-api.js";
import { validationMethodSchema, type ValidationMethod } from "./validation-method.js";

export type AcmCertificateMetadata = {
  /** The time at which the certificate was requested. */
  createdAt?: Date;
  /** Indicates whether the certificate has been exported. */
  exported?: boolean;
  /**
   * The date and time when the certificate was imported. This value exists only when the
   * certificate type is IMPORTED.
   */
  importedAt?: Date;
  /** Indicates whether the certificate is currently in use by an Amazon Web Services service. */
  inUse?: boolean;
  /**
   * The time at which the certificate was issued. This value exists only when the certificate type
   * is AMAZON_ISSUED.
   */
  issuedAt?: Date;
  /**
   * Specifies whether the certificate is eligible for renewal. At this time, only exported private
   * certificates can be renewed with the RenewCertificate command.
   */
  renewalEligibility?: RenewalEligibility;
  /**
   * The time at which the certificate was revoked. This value exists only when the certificate
   * status is REVOKED.
   */
  revokedAt?: Date;
  /**
   * The status of the certificate. A certificate enters status PENDING_VALIDATION upon being
   * requested, unless it fails for any of the reasons given in the troubleshooting topic
   * Certificate request fails. ACM makes repeated attempts to validate a certificate for 72 hours
   * and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the
   * request, correct the issue with DNS validation or Email validation, and try again. If
   * validation succeeds, the certificate enters status ISSUED.
   */
  status?: StatusAwsCertificateManagerCertificatesApi;
  /** The renewal status of the certificate. */
  renewalStatus?: RenewalStatus;
  /**
   * The source of the certificate. For certificates provided by ACM, this value is AMAZON_ISSUED.
   * For certificates that you imported with ImportCertificate, this value is IMPORTED. ACM does not
   * provide managed renewal for imported certificates. For more information about the differences
   * between certificates that you import and those that ACM provides, see Importing Certificates in
   * the Certificate Manager User Guide.
   */
  type?: TypeAwsCertificateManagerCertificatesApi;
  /** Indicates whether the certificate can be exported. */
  exportOption?: ExportOption;
  /** Identifies the Amazon Web Services service that manages the certificate issued by ACM. */
  managedBy?: ManagedBy;
  /** Specifies the domain validation method. */
  validationMethod?: ValidationMethod;
  /** The origin of the certificate's key pair. */
  certificateKeyPairOrigin?: CertificateKeyPairOrigin;
  /** The ARN of the ACME endpoint used to issue the certificate. */
  acmeEndpointArn?: string;
  /** The ACME account identifier associated with the certificate. */
  acmeAccountId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const acmCertificateMetadataSchema: Schema<AcmCertificateMetadata> = s.object<AcmCertificateMetadata>(
  {
    createdAt: s.optional(s.dateTime()),
    exported: s.optional(s.boolean()),
    importedAt: s.optional(s.dateTime()),
    inUse: s.optional(s.boolean()),
    issuedAt: s.optional(s.dateTime()),
    renewalEligibility: s.optional(s.lazy(() => renewalEligibilitySchema)),
    revokedAt: s.optional(s.dateTime()),
    status: s.optional(s.lazy(() => statusAwsCertificateManagerCertificatesApiSchema)),
    renewalStatus: s.optional(s.lazy(() => renewalStatusSchema)),
    type: s.optional(s.lazy(() => typeAwsCertificateManagerCertificatesApiSchema)),
    exportOption: s.optional(s.lazy(() => exportOptionSchema)),
    managedBy: s.optional(s.lazy(() => managedBySchema)),
    validationMethod: s.optional(s.lazy(() => validationMethodSchema)),
    certificateKeyPairOrigin: s.optional(s.lazy(() => certificateKeyPairOriginSchema)),
    acmeEndpointArn: s.optional(s.string()),
    acmeAccountId: s.optional(s.string()),
    _keysMap: {
      createdAt: "CreatedAt",
      exported: "Exported",
      importedAt: "ImportedAt",
      inUse: "InUse",
      issuedAt: "IssuedAt",
      renewalEligibility: "RenewalEligibility",
      revokedAt: "RevokedAt",
      status: "Status",
      renewalStatus: "RenewalStatus",
      type: "Type",
      exportOption: "ExportOption",
      managedBy: "ManagedBy",
      validationMethod: "ValidationMethod",
      certificateKeyPairOrigin: "CertificateKeyPairOrigin",
      acmeEndpointArn: "AcmeEndpointArn",
      acmeAccountId: "AcmeAccountId",
    },
  },
  { additionalProperties: s.json() },
);
