import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  certificateKeyPairOriginSchema,
  type CertificateKeyPairOrigin,
} from "./certificate-key-pair-origin.js";
import { exportOption2Schema, type ExportOption2 } from "./export-option2.js";
import { extendedKeyUsage2Schema, type ExtendedKeyUsage2 } from "./extended-key-usage2.js";
import { keyAlgorithmSchema, type KeyAlgorithm } from "./key-algorithm.js";
import { keyUsage2Schema, type KeyUsage2 } from "./key-usage2.js";
import { managedBySchema, type ManagedBy } from "./managed-by.js";
import { renewalEligibilitySchema, type RenewalEligibility } from "./renewal-eligibility.js";
import {
  statusAwsCertificateManagerCertificatesApiSchema,
  type StatusAwsCertificateManagerCertificatesApi,
} from "./status-aws-certificate-manager-certificates-api.js";
import {
  typeAwsCertificateManagerCertificatesApiSchema,
  type TypeAwsCertificateManagerCertificatesApi,
} from "./type-aws-certificate-manager-certificates-api.js";

export type CertificateSummary = {
  /**
   * Amazon Resource Name (ARN) of the certificate. This is of the form:
   * arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 For more
   * information about ARNs, see Amazon Resource Names (ARNs).
   */
  certificateArn?: string;
  /**
   * Fully qualified domain name (FQDN), such as www.example.com or example.com, for the
   * certificate.
   */
  domainName?: string;
  /**
   * One or more domain names (subject alternative names) included in the certificate. This list
   * contains the domain names that are bound to the public key that is contained in the
   * certificate. The subject alternative names include the canonical domain name (CN) of the
   * certificate and additional domain names that can be used to connect to the website. When called
   * by ListCertificates, this parameter will only return the first 100 subject alternative names
   * included in the certificate. To display the full list of subject alternative names, use
   * DescribeCertificate.
   */
  subjectAlternativeNameSummaries?: string[];
  /**
   * When called by ListCertificates, indicates whether the full list of subject alternative names
   * has been included in the response. If false, the response includes all of the subject
   * alternative names included in the certificate. If true, the response only includes the first
   * 100 subject alternative names included in the certificate. To display the full list of subject
   * alternative names, use DescribeCertificate.
   */
  hasAdditionalSubjectAlternativeNames?: boolean;
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
   * The source of the certificate. For certificates provided by ACM, this value is AMAZON_ISSUED.
   * For certificates that you imported with ImportCertificate, this value is IMPORTED. ACM does not
   * provide managed renewal for imported certificates. For more information about the differences
   * between certificates that you import and those that ACM provides, see Importing Certificates in
   * the Certificate Manager User Guide.
   */
  type?: TypeAwsCertificateManagerCertificatesApi;
  /** The algorithm that was used to generate the public-private key pair. */
  keyAlgorithm?: KeyAlgorithm;
  /**
   * A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies
   * the purpose of the public key contained in the certificate. Possible extension values include
   * DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.
   */
  keyUsages?: KeyUsage2[];
  /**
   * Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a
   * purpose for which the certificate public key can be used and consists of a name and an object
   * identifier (OID).
   */
  extendedKeyUsages?: ExtendedKeyUsage2[];
  /** Indicates if export is enabled for the certificate. */
  exportOption?: ExportOption2;
  /** Indicates whether the certificate is currently in use by any Amazon Web Services resources. */
  inUse?: boolean;
  /** Indicates whether the certificate has been exported. */
  exported?: boolean;
  /**
   * Specifies whether the certificate is eligible for renewal. At this time, only exported private
   * certificates can be renewed with the RenewCertificate command.
   */
  renewalEligibility?: RenewalEligibility;
  /** The time before which the certificate is not valid. */
  notBefore?: Date;
  /** The time after which the certificate is not valid. */
  notAfter?: Date;
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
   * The time at which the certificate was revoked. This value exists only when the certificate
   * status is REVOKED.
   */
  revokedAt?: Date;
  /** Identifies the Amazon Web Services service that manages the certificate issued by ACM. */
  managedBy?: ManagedBy;
  /** The origin of the certificate's key pair. */
  certificateKeyPairOrigin?: CertificateKeyPairOrigin;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const certificateSummarySchema: Schema<CertificateSummary> = s.object<CertificateSummary>(
  {
    certificateArn: s.optional(s.string()),
    domainName: s.optional(s.string()),
    subjectAlternativeNameSummaries: s.optional(s.array(s.string())),
    hasAdditionalSubjectAlternativeNames: s.optional(s.boolean()),
    status: s.optional(s.lazy(() => statusAwsCertificateManagerCertificatesApiSchema)),
    type: s.optional(s.lazy(() => typeAwsCertificateManagerCertificatesApiSchema)),
    keyAlgorithm: s.optional(s.lazy(() => keyAlgorithmSchema)),
    keyUsages: s.optional(s.array(s.lazy(() => keyUsage2Schema))),
    extendedKeyUsages: s.optional(s.array(s.lazy(() => extendedKeyUsage2Schema))),
    exportOption: s.optional(s.lazy(() => exportOption2Schema)),
    inUse: s.optional(s.boolean()),
    exported: s.optional(s.boolean()),
    renewalEligibility: s.optional(s.lazy(() => renewalEligibilitySchema)),
    notBefore: s.optional(s.dateTime()),
    notAfter: s.optional(s.dateTime()),
    createdAt: s.optional(s.dateTime()),
    issuedAt: s.optional(s.dateTime()),
    importedAt: s.optional(s.dateTime()),
    revokedAt: s.optional(s.dateTime()),
    managedBy: s.optional(s.lazy(() => managedBySchema)),
    certificateKeyPairOrigin: s.optional(s.lazy(() => certificateKeyPairOriginSchema)),
    _keysMap: {
      certificateArn: "CertificateArn",
      domainName: "DomainName",
      subjectAlternativeNameSummaries: "SubjectAlternativeNameSummaries",
      hasAdditionalSubjectAlternativeNames: "HasAdditionalSubjectAlternativeNames",
      status: "Status",
      type: "Type",
      keyAlgorithm: "KeyAlgorithm",
      keyUsages: "KeyUsages",
      extendedKeyUsages: "ExtendedKeyUsages",
      exportOption: "ExportOption",
      inUse: "InUse",
      exported: "Exported",
      renewalEligibility: "RenewalEligibility",
      notBefore: "NotBefore",
      notAfter: "NotAfter",
      createdAt: "CreatedAt",
      issuedAt: "IssuedAt",
      importedAt: "ImportedAt",
      revokedAt: "RevokedAt",
      managedBy: "ManagedBy",
      certificateKeyPairOrigin: "CertificateKeyPairOrigin",
    },
  },
  { additionalProperties: s.json() },
);
