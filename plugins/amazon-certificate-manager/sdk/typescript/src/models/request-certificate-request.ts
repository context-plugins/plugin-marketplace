import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { certificateOptionsSchema, type CertificateOptions } from "./certificate-options.js";
import { domainValidationOptionSchema, type DomainValidationOption } from "./domain-validation-option.js";
import { keyAlgorithm4Schema, type KeyAlgorithm4 } from "./key-algorithm4.js";
import { managedBySchema, type ManagedBy } from "./managed-by.js";
import { tagSchema, type Tag } from "./tag.js";
import { validationMethod4Schema, type ValidationMethod4 } from "./validation-method4.js";

export type RequestCertificateRequest = {
  /**
   * Fully qualified domain name (FQDN), such as www.example.com, that you want to secure with an
   * ACM certificate. Use an asterisk (*) to create a wildcard certificate that protects several
   * sites in the same domain. For example, *.example.com protects www.example.com,
   * site.example.com, and images.example.com. In compliance with RFC 5280, the length of the domain
   * name (technically, the Common Name) that you provide cannot exceed 64 octets (characters),
   * including periods. To add a longer domain name, specify it in the Subject Alternative Name
   * field, which supports names up to 253 octets in length.
   */
  domainName: string;
  /**
   * The method you want to use if you are requesting a public certificate to validate that you own
   * or control domain. You can validate with DNS or validate with email. We recommend that you use
   * DNS validation.
   */
  validationMethod?: ValidationMethod4;
  /**
   * Additional FQDNs to be included in the Subject Alternative Name extension of the ACM
   * certificate. For example, add the name www.example.net to a certificate for which the
   * DomainName field is www.example.com if users can reach your site by using either name. The
   * maximum number of domain names that you can add to an ACM certificate is 100. However, the
   * initial quota is 10 domain names. If you need more than 10 names, you must request a quota
   * increase. For more information, see Quotas. The maximum length of a SAN DNS name is 253 octets.
   * The name is made up of multiple labels separated by periods.
   */
  subjectAlternativeNames?: string[];
  /**
   * Customer chosen string that can be used to distinguish between calls to RequestCertificate.
   * Idempotency tokens time out after one hour. Therefore, if you call RequestCertificate multiple
   * times with the same idempotency token within one hour, ACM recognizes that you are requesting
   * only one certificate and will issue only one. If you change the idempotency token for each
   * call, ACM recognizes that you are requesting multiple certificates.
   */
  idempotencyToken?: string;
  /**
   * The domain name that you want ACM to use to send you emails so that you can validate domain
   * ownership.
   */
  domainValidationOptions?: DomainValidationOption[];
  options?: CertificateOptions;
  /**
   * The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used to
   * issue the certificate. If you do not provide an ARN and you are trying to request a private
   * certificate, ACM will attempt to issue a public certificate. For more information about private
   * CAs, see the Amazon Web Services Private Certificate Authority user guide. The ARN must have
   * the following form:
   * arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012
   */
  certificateAuthorityArn?: string;
  /** One or more resource tags to associate with the certificate. */
  tags?: Tag[];
  /**
   * Specifies the algorithm of the public and private key pair that your certificate uses to
   * encrypt data. RSA is the default key algorithm for ACM certificates. Elliptic Curve Digital
   * Signature Algorithm (ECDSA) keys are smaller, offering security comparable to RSA keys but with
   * greater computing efficiency. However, ECDSA is not supported by all network clients. Some
   * Amazon Web Services services may require RSA keys, or only support ECDSA keys of a particular
   * size, while others allow the use of either RSA and ECDSA keys to ensure that compatibility is
   * not broken. Check the requirements for the A
   */
  keyAlgorithm?: KeyAlgorithm4;
  /** Identifies the Amazon Web Services service that manages the certificate issued by ACM. */
  managedBy?: ManagedBy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requestCertificateRequestSchema: Schema<RequestCertificateRequest> =
  s.object<RequestCertificateRequest>(
    {
      domainName: s.string(),
      validationMethod: s.optional(s.lazy(() => validationMethod4Schema)),
      subjectAlternativeNames: s.optional(s.array(s.string())),
      idempotencyToken: s.optional(s.string()),
      domainValidationOptions: s.optional(s.array(s.lazy(() => domainValidationOptionSchema))),
      options: s.optional(s.lazy(() => certificateOptionsSchema)),
      certificateAuthorityArn: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      keyAlgorithm: s.optional(s.lazy(() => keyAlgorithm4Schema)),
      managedBy: s.optional(s.lazy(() => managedBySchema)),
      _keysMap: {
        domainName: "DomainName",
        validationMethod: "ValidationMethod",
        subjectAlternativeNames: "SubjectAlternativeNames",
        idempotencyToken: "IdempotencyToken",
        domainValidationOptions: "DomainValidationOptions",
        options: "Options",
        certificateAuthorityArn: "CertificateAuthorityArn",
        tags: "Tags",
        keyAlgorithm: "KeyAlgorithm",
        managedBy: "ManagedBy",
      },
    },
    { additionalProperties: s.json() },
  );
