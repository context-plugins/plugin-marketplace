import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  certificateKeyPairOriginSchema,
  type CertificateKeyPairOrigin,
} from "./certificate-key-pair-origin.js";
import { certificateOptionsSchema, type CertificateOptions } from "./certificate-options.js";
import { domainValidationSchema, type DomainValidation } from "./domain-validation.js";
import { extendedKeyUsageSchema, type ExtendedKeyUsage } from "./extended-key-usage.js";
import { failureReasonSchema, type FailureReason } from "./failure-reason.js";
import { keyAlgorithmSchema, type KeyAlgorithm } from "./key-algorithm.js";
import { keyUsageSchema, type KeyUsage } from "./key-usage.js";
import { managedBySchema, type ManagedBy } from "./managed-by.js";
import { renewalEligibilitySchema, type RenewalEligibility } from "./renewal-eligibility.js";
import { renewalSummarySchema, type RenewalSummary } from "./renewal-summary.js";
import { revocationReasonSchema, type RevocationReason } from "./revocation-reason.js";
import {
  statusAwsCertificateManagerCertificatesApiSchema,
  type StatusAwsCertificateManagerCertificatesApi,
} from "./status-aws-certificate-manager-certificates-api.js";
import {
  typeAwsCertificateManagerCertificatesApiSchema,
  type TypeAwsCertificateManagerCertificatesApi,
} from "./type-aws-certificate-manager-certificates-api.js";
import { updateSummarySchema, type UpdateSummary } from "./update-summary.js";

export type CertificateDetail = {
  /**
   * The Amazon Resource Name (ARN) of the certificate. For more information about ARNs, see Amazon
   * Resource Names (ARNs) in the Amazon Web Services General Reference.
   */
  certificateArn?: string;
  /**
   * The fully qualified domain name for the certificate, such as www.example.com or example.com.
   */
  domainName?: string;
  /**
   * One or more domain names (subject alternative names) included in the certificate. This list
   * contains the domain names that are bound to the public key that is contained in the
   * certificate. The subject alternative names include the canonical domain name (CN) of the
   * certificate and additional domain names that can be used to connect to the website.
   */
  subjectAlternativeNames?: string[];
  /** Identifies the Amazon Web Services service that manages the certificate issued by ACM. */
  managedBy?: ManagedBy;
  /**
   * Contains information about the initial validation of each domain name that occurs as a result
   * of the RequestCertificate request. This field exists only when the certificate type is
   * AMAZON_ISSUED.
   */
  domainValidationOptions?: DomainValidation[];
  /** The serial number of the certificate. */
  serial?: string;
  /** The name of the entity that is associated with the public key contained in the certificate. */
  subject?: string;
  /** The name of the certificate authority that issued and signed the certificate. */
  issuer?: string;
  /** The time at which the certificate was requested. */
  createdAt?: Date;
  /**
   * The time at which the certificate was issued. This value exists only when the certificate type
   * is AMAZON_ISSUED.
   */
  issuedAt?: Date;
  /**
   * The date and time when the certificate was imported. This value exists only when the
   * certificate type is IMPORTED.
   */
  importedAt?: Date;
  /**
   * The status of the certificate. A certificate enters status PENDING_VALIDATION upon being
   * requested, unless it fails for any of the reasons given in the troubleshooting topic
   * Certificate request fails. ACM makes repeated attempts to validate a certificate for 72 hours
   * and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the
   * request, correct the issue with DNS validation or Email validation, and try again. If
   * validation succeeds, the certificate enters status ISSUED.
   */
  status?: StatusAwsCertificateManagerCertificatesApi;
  /**
   * The time at which the certificate was revoked. This value exists only when the certificate
   * status is REVOKED.
   */
  revokedAt?: Date;
  /**
   * The reason the certificate was revoked. This value exists only when the certificate status is
   * REVOKED.
   */
  revocationReason?: RevocationReason;
  /** The time before which the certificate is not valid. */
  notBefore?: Date;
  /** The time after which the certificate is not valid. */
  notAfter?: Date;
  /** The algorithm that was used to generate the public-private key pair. */
  keyAlgorithm?: KeyAlgorithm;
  /** The algorithm that was used to sign the certificate. */
  signatureAlgorithm?: string;
  /**
   * A list of ARNs for the Amazon Web Services resources that are using the certificate. A
   * certificate can be used by multiple Amazon Web Services resources.
   */
  inUseBy?: string[];
  /**
   * The reason the certificate request failed. This value exists only when the certificate status
   * is FAILED. For more information, see Certificate Request Failed in the Certificate Manager User
   * Guide.
   */
  failureReason?: FailureReason;
  /**
   * The source of the certificate. For certificates provided by ACM, this value is AMAZON_ISSUED.
   * For certificates that you imported with ImportCertificate, this value is IMPORTED. ACM does not
   * provide managed renewal for imported certificates. For more information about the differences
   * between certificates that you import and those that ACM provides, see Importing Certificates in
   * the Certificate Manager User Guide.
   */
  type?: TypeAwsCertificateManagerCertificatesApi;
  renewalSummary?: RenewalSummary;
  /**
   * A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies
   * the purpose of the public key contained in the certificate. Possible extension values include
   * DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.
   */
  keyUsages?: KeyUsage[];
  /**
   * Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a
   * purpose for which the certificate public key can be used and consists of a name and an object
   * identifier (OID).
   */
  extendedKeyUsages?: ExtendedKeyUsage[];
  /**
   * The Amazon Resource Name (ARN) of the private certificate authority (CA) that issued the
   * certificate. This has the following format:
   * arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012
   */
  certificateAuthorityArn?: string;
  /**
   * Specifies whether the certificate is eligible for renewal. At this time, only exported private
   * certificates can be renewed with the RenewCertificate command.
   */
  renewalEligibility?: RenewalEligibility;
  options?: CertificateOptions;
  updateSummary?: UpdateSummary;
  /** The origin of the certificate's key pair. */
  certificateKeyPairOrigin?: CertificateKeyPairOrigin;
  /** The ARN of the ACME endpoint used to issue the certificate. */
  acmeEndpointArn?: string;
  /** The ACME account identifier associated with the certificate. */
  acmeAccountId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const certificateDetailSchema: Schema<CertificateDetail> = s.object<CertificateDetail>(
  {
    certificateArn: s.optional(s.string()),
    domainName: s.optional(s.string()),
    subjectAlternativeNames: s.optional(s.array(s.string())),
    managedBy: s.optional(s.lazy(() => managedBySchema)),
    domainValidationOptions: s.optional(s.array(s.lazy(() => domainValidationSchema))),
    serial: s.optional(s.string()),
    subject: s.optional(s.string()),
    issuer: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    issuedAt: s.optional(s.dateTime()),
    importedAt: s.optional(s.dateTime()),
    status: s.optional(s.lazy(() => statusAwsCertificateManagerCertificatesApiSchema)),
    revokedAt: s.optional(s.dateTime()),
    revocationReason: s.optional(s.lazy(() => revocationReasonSchema)),
    notBefore: s.optional(s.dateTime()),
    notAfter: s.optional(s.dateTime()),
    keyAlgorithm: s.optional(s.lazy(() => keyAlgorithmSchema)),
    signatureAlgorithm: s.optional(s.string()),
    inUseBy: s.optional(s.array(s.string())),
    failureReason: s.optional(s.lazy(() => failureReasonSchema)),
    type: s.optional(s.lazy(() => typeAwsCertificateManagerCertificatesApiSchema)),
    renewalSummary: s.optional(s.lazy(() => renewalSummarySchema)),
    keyUsages: s.optional(s.array(s.lazy(() => keyUsageSchema))),
    extendedKeyUsages: s.optional(s.array(s.lazy(() => extendedKeyUsageSchema))),
    certificateAuthorityArn: s.optional(s.string()),
    renewalEligibility: s.optional(s.lazy(() => renewalEligibilitySchema)),
    options: s.optional(s.lazy(() => certificateOptionsSchema)),
    updateSummary: s.optional(s.lazy(() => updateSummarySchema)),
    certificateKeyPairOrigin: s.optional(s.lazy(() => certificateKeyPairOriginSchema)),
    acmeEndpointArn: s.optional(s.string()),
    acmeAccountId: s.optional(s.string()),
    _keysMap: {
      certificateArn: "CertificateArn",
      domainName: "DomainName",
      subjectAlternativeNames: "SubjectAlternativeNames",
      managedBy: "ManagedBy",
      domainValidationOptions: "DomainValidationOptions",
      serial: "Serial",
      subject: "Subject",
      issuer: "Issuer",
      createdAt: "CreatedAt",
      issuedAt: "IssuedAt",
      importedAt: "ImportedAt",
      status: "Status",
      revokedAt: "RevokedAt",
      revocationReason: "RevocationReason",
      notBefore: "NotBefore",
      notAfter: "NotAfter",
      keyAlgorithm: "KeyAlgorithm",
      signatureAlgorithm: "SignatureAlgorithm",
      inUseBy: "InUseBy",
      failureReason: "FailureReason",
      type: "Type",
      renewalSummary: "RenewalSummary",
      keyUsages: "KeyUsages",
      extendedKeyUsages: "ExtendedKeyUsages",
      certificateAuthorityArn: "CertificateAuthorityArn",
      renewalEligibility: "RenewalEligibility",
      options: "Options",
      updateSummary: "UpdateSummary",
      certificateKeyPairOrigin: "CertificateKeyPairOrigin",
      acmeEndpointArn: "AcmeEndpointArn",
      acmeAccountId: "AcmeAccountId",
    },
  },
  { additionalProperties: s.json() },
);
