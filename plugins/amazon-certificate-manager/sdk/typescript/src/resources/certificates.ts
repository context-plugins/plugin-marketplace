import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsCertificateManagerCertificatesApiSchema,
  type XAmzTargetAwsCertificateManagerCertificatesApi,
} from "../models/xamz-target-aws-certificate-manager-certificates-api.js";
import {
  xAmzTarget1AwsCertificateManagerCertificatesApiSchema,
  type XAmzTarget1AwsCertificateManagerCertificatesApi,
} from "../models/xamz-target1-aws-certificate-manager-certificates-api.js";
import {
  xAmzTarget2AwsCertificateManagerCertificatesApiSchema,
  type XAmzTarget2AwsCertificateManagerCertificatesApi,
} from "../models/xamz-target2-aws-certificate-manager-certificates-api.js";
import {
  xAmzTarget3AwsCertificateManagerCertificatesApiSchema,
  type XAmzTarget3AwsCertificateManagerCertificatesApi,
} from "../models/xamz-target3-aws-certificate-manager-certificates-api.js";
import {
  xAmzTarget4AwsCertificateManagerCertificatesApiSchema,
  type XAmzTarget4AwsCertificateManagerCertificatesApi,
} from "../models/xamz-target4-aws-certificate-manager-certificates-api.js";
import { xAmzTarget5Schema, type XAmzTarget5 } from "../models/xamz-target5.js";
import { xAmzTarget6Schema, type XAmzTarget6 } from "../models/xamz-target6.js";
import { xAmzTarget7Schema, type XAmzTarget7 } from "../models/xamz-target7.js";
import { xAmzTarget8Schema, type XAmzTarget8 } from "../models/xamz-target8.js";
import type { Servers } from "../servers.js";

export class Certificates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Certificate
   *
   * @remarks
   * Deletes a certificate and its associated private key. If this action succeeds, the certificate
   * is not available for use by Amazon Web Services services integrated with ACM. Deleting a
   * certificate is eventually consistent. The may be a short delay before the certificate no longer
   * appears in the list that can be displayed by calling the ListCertificates action or be
   * retrieved by calling the GetCertificate action. You cannot delete an ACM certificate that is
   * being used by another Amazon Web Services service. To delete a certificate that is in use, you
   * must first remove the certificate association using the console or the CLI for the associated
   * service. Deleting a certificate issued by a private certificate authority (CA) has no effect on
   * the CA. You will continue to be charged for the CA until it is deleted. For more information,
   * see Deleting Your Private CA in the Private Certificate Authority User Guide. You cannot delete
   * a certificate with a CertificateKeyPairOrigin of ACME. ACM automatically deletes these
   * certificates 1 year after they expire. Deleting a certificate issued by a private certificate
   * authority (CA) has no effect on the CA. You will continue to be charged for the CA u
   *
   * @returns Success
   *
   * @throws {@link Certificates.DeleteCertificateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteCertificate(
    request: Certificates.DeleteCertificateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Certificates.DeleteCertificateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteCertificate"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsCertificateManagerCertificatesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Certificates.DeleteCertificateError,
      },
      options,
    );
  }

  /**
   * Describe Certificate
   *
   * @remarks
   * Returns detailed metadata about the specified ACM certificate. If you have just created a
   * certificate using the RequestCertificate action, there is a delay of several seconds before you
   * can retrieve information about it.
   *
   * @returns Success
   *
   * @throws {@link Certificates.DescribeCertificateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeCertificate(
    request: Certificates.DescribeCertificateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Certificates.DescribeCertificateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeCertificate"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsCertificateManagerCertificatesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Certificates.DescribeCertificateError,
      },
      options,
    );
  }

  /**
   * Export Certificate
   *
   * @remarks
   * Exports a private certificate issued by a private certificate authority (CA) or a public
   * certificate for use anywhere. The exported file contains the certificate, the certificate
   * chain, and the encrypted private key associated with the public key that is embedded in the
   * certificate. For security, you must assign a passphrase for the private key when exporting it.
   * For information about exporting and formatting a certificate using the ACM console or CLI, see
   * Export a private certificate and Export a public certificate. ACM public certificates created
   * prior to June 17, 2025 cannot be exported.
   *
   * @returns Success
   *
   * @throws {@link Certificates.ExportCertificateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  exportCertificate(
    request: Certificates.ExportCertificateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Certificates.ExportCertificateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ExportCertificate"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AwsCertificateManagerCertificatesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Certificates.ExportCertificateError,
      },
      options,
    );
  }

  /**
   * Get Certificate
   *
   * @remarks
   * Retrieves a certificate and its certificate chain. The certificate may be either a public or
   * private certificate issued using the ACM RequestCertificate action, or a certificate imported
   * into ACM using the ImportCertificate action. The chain consists of the certificate of the
   * issuing CA and the intermediate certificates of any other subordinate CAs. All of the
   * certificates are base64 encoded. You can use OpenSSL to decode the certificates and inspect
   * individual fields.
   *
   * @returns Success
   *
   * @throws {@link Certificates.GetCertificateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCertificate(
    request: Certificates.GetCertificateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Certificates.GetCertificateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetCertificate"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AwsCertificateManagerCertificatesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Certificates.GetCertificateError,
      },
      options,
    );
  }

  /**
   * Import Certificate
   *
   * @remarks
   * Imports a certificate into Certificate Manager (ACM) to use with services that are integrated
   * with ACM. Note that integrated services allow only certificate types and keys they support to
   * be associated with their resources. Further, their support differs depending on whether the
   * certificate is imported into IAM or into ACM. For more information, see the documentation for
   * each service. For more information about importing certificates into ACM, see Importing
   * Certificates in the Certificate Manager User Guide. ACM does not provide managed renewal for
   * certificates that you import. Note the following guidelines when importing third party
   * certificates: You must enter the private key that matches the certificate you are importing.
   * The private key must be unencrypted. You cannot import a private key that is protected by a
   * password or a passphrase. The private key must be no larger than 5 KB (5,120 bytes). The
   * certificate, private key, and certificate chain must be PEM-encoded. The current time must be
   * between the Not Before and Not After certificate fields. The Issuer field must not be empty.
   * The OCSP authority URL, if present, must not exceed 1000 characters. To import a new
   * certificate,
   *
   * @returns Success
   *
   * @throws {@link Certificates.ImportCertificateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  importCertificate(
    request: Certificates.ImportCertificateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Certificates.ImportCertificateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ImportCertificate"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AwsCertificateManagerCertificatesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Certificates.ImportCertificateError,
      },
      options,
    );
  }

  /**
   * List Certificates
   *
   * @remarks
   * Retrieves a list of certificate ARNs and domain names. You can request that only certificates
   * that match a specific status be listed. You can also filter by specific attributes of the
   * certificate. Default filtering returns only RSA_2048 certificates. For more information, see
   * Filters. By default, this action does not return certificates with a CertificateKeyPairOrigin
   * of ACME. To include ACME certificates, specify ACME in the CertificateKeyPairOrigins filter.
   *
   * @returns Success
   *
   * @throws {@link Certificates.ListCertificatesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listCertificates(
    request: Certificates.ListCertificatesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Certificates.ListCertificatesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListCertificates"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget5Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Certificates.ListCertificatesError,
      },
      options,
    );
  }

  /**
   * Request Certificate
   *
   * @remarks
   * Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM
   * certificate, you must specify a fully qualified domain name (FQDN) in the DomainName parameter.
   * You can also specify additional FQDNs in the SubjectAlternativeNames parameter. If you are
   * requesting a private certificate, domain validation is not required. If you are requesting a
   * public certificate, each domain name that you specify must be validated to verify that you own
   * or control the domain. You can use DNS validation or email validation. We recommend that you
   * use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate
   * validation process. ACM first checks for a Subject Alternative Name, and, if it finds one,
   * ignores the common name (CN). After successful completion of the RequestCertificate action,
   * there is a delay of several seconds before you can retrieve information about the new
   * certificate.
   *
   * @returns Success
   *
   * @throws {@link Certificates.RequestCertificateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  requestCertificate(
    request: Certificates.RequestCertificateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Certificates.RequestCertificateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RequestCertificate"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget8Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Certificates.RequestCertificateError,
      },
      options,
    );
  }

  /**
   * Revoke Certificate
   *
   * @remarks
   * Revokes a public ACM certificate. You can only revoke certificates that have been previously
   * exported. Once a certificate is revoked, you cannot reuse the certificate. Revoking a
   * certificate is permanent.
   *
   * @returns Success
   *
   * @throws {@link Certificates.RevokeCertificateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  revokeCertificate(
    request: Certificates.RevokeCertificateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Certificates.RevokeCertificateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RevokeCertificate"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget6Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Certificates.RevokeCertificateError,
      },
      options,
    );
  }

  /**
   * Search Certificates
   *
   * @remarks
   * Retrieves a list of certificates matching search criteria. You can filter certificates by X.509
   * attributes and ACM specific properties like certificate status, type and renewal eligibility.
   * This operation provides more flexible filtering than ListCertificates by supporting complex
   * filter statements.
   *
   * @returns Success
   *
   * @throws {@link Certificates.SearchCertificatesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchCertificates(
    request: Certificates.SearchCertificatesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Certificates.SearchCertificatesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#SearchCertificates"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget7Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Certificates.SearchCertificatesError,
      },
      options,
    );
  }
}

export namespace Certificates {
  export type DeleteCertificateRequestParams = {
    xAmzTarget: XAmzTargetAwsCertificateManagerCertificatesApi;
  };

  export class DeleteCertificateError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCertificateError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeCertificateRequestParams = {
    xAmzTarget: XAmzTarget1AwsCertificateManagerCertificatesApi;
  };

  export class DescribeCertificateError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeCertificateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ExportCertificateRequestParams = {
    xAmzTarget: XAmzTarget2AwsCertificateManagerCertificatesApi;
  };

  export class ExportCertificateError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ExportCertificateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type GetCertificateRequestParams = {
    xAmzTarget: XAmzTarget3AwsCertificateManagerCertificatesApi;
  };

  export class GetCertificateError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetCertificateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ImportCertificateRequestParams = {
    xAmzTarget: XAmzTarget4AwsCertificateManagerCertificatesApi;
  };

  export class ImportCertificateError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ImportCertificateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListCertificatesRequestParams = {
    xAmzTarget: XAmzTarget5;
  };

  export class ListCertificatesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListCertificatesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RequestCertificateRequestParams = {
    xAmzTarget: XAmzTarget8;
  };

  export class RequestCertificateError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RequestCertificateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RevokeCertificateRequestParams = {
    xAmzTarget: XAmzTarget6;
  };

  export class RevokeCertificateError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RevokeCertificateError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type SearchCertificatesRequestParams = {
    xAmzTarget: XAmzTarget7;
  };

  export class SearchCertificatesError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SearchCertificatesError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
