import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsCertificateManagerOperationsApiSchema,
  type XAmzTargetAwsCertificateManagerOperationsApi,
} from "../models/xamz-target-aws-certificate-manager-operations-api.js";
import {
  xAmzTarget1AwsCertificateManagerOperationsApiSchema,
  type XAmzTarget1AwsCertificateManagerOperationsApi,
} from "../models/xamz-target1-aws-certificate-manager-operations-api.js";
import {
  xAmzTarget2AwsCertificateManagerOperationsApiSchema,
  type XAmzTarget2AwsCertificateManagerOperationsApi,
} from "../models/xamz-target2-aws-certificate-manager-operations-api.js";
import {
  xAmzTarget3AwsCertificateManagerOperationsApiSchema,
  type XAmzTarget3AwsCertificateManagerOperationsApi,
} from "../models/xamz-target3-aws-certificate-manager-operations-api.js";
import {
  xAmzTarget4AwsCertificateManagerOperationsApiSchema,
  type XAmzTarget4AwsCertificateManagerOperationsApi,
} from "../models/xamz-target4-aws-certificate-manager-operations-api.js";
import {
  xAmzTarget5AwsCertificateManagerOperationsApiSchema,
  type XAmzTarget5AwsCertificateManagerOperationsApi,
} from "../models/xamz-target5-aws-certificate-manager-operations-api.js";
import {
  xAmzTarget6AwsCertificateManagerOperationsApiSchema,
  type XAmzTarget6AwsCertificateManagerOperationsApi,
} from "../models/xamz-target6-aws-certificate-manager-operations-api.js";
import {
  xAmzTarget7AwsCertificateManagerOperationsApiSchema,
  type XAmzTarget7AwsCertificateManagerOperationsApi,
} from "../models/xamz-target7-aws-certificate-manager-operations-api.js";
import {
  xAmzTarget8AwsCertificateManagerOperationsApiSchema,
  type XAmzTarget8AwsCertificateManagerOperationsApi,
} from "../models/xamz-target8-aws-certificate-manager-operations-api.js";
import { xAmzTarget9Schema, type XAmzTarget9 } from "../models/xamz-target9.js";
import type { Servers } from "../servers.js";

export class Operations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Account Configuration
   *
   * @remarks
   * Returns the account configuration options associated with an Amazon Web Services account.
   *
   * @returns Success
   *
   * @throws {@link Operations.GetAccountConfigurationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAccountConfiguration(
    request: Operations.GetAccountConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.GetAccountConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetAccountConfiguration"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AwsCertificateManagerOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.GetAccountConfigurationError,
      },
      options,
    );
  }

  /**
   * Get Acme External Account Binding Credentials
   *
   * @remarks
   * Retrieves the key ID and MAC key credentials for an external account binding. These credentials
   * are used by ACME clients during account registration to bind to the endpoint.
   *
   * @returns Success
   *
   * @throws {@link Operations.GetAcmeExternalAccountBindingCredentialsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAcmeExternalAccountBindingCredentials(
    request: Operations.GetAcmeExternalAccountBindingCredentialsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.GetAcmeExternalAccountBindingCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetAcmeExternalAccountBindingCredentials"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget5AwsCertificateManagerOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.GetAcmeExternalAccountBindingCredentialsError,
      },
      options,
    );
  }

  /**
   * List Certificate Domain Validations
   *
   * @remarks
   * Returns per-domain validation summaries for an ACM certificate. Each summary includes the
   * domain name, the active validation configuration, and the requested validation configuration
   * when a validation method migration is in progress. You can use the results to monitor the
   * progress of an email-to-DNS validation migration and to retrieve the CNAME records required for
   * DNS validation.
   *
   * @returns Success
   *
   * @throws {@link Operations.ListCertificateDomainValidationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listCertificateDomainValidations(
    request: Operations.ListCertificateDomainValidationsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ListCertificateDomainValidationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListCertificateDomainValidations"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget6AwsCertificateManagerOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ListCertificateDomainValidationsError,
      },
      options,
    );
  }

  /**
   * Put Account Configuration
   *
   * @remarks
   * Adds or modifies account-level configurations in ACM. The supported configuration option is
   * DaysBeforeExpiry. This option specifies the number of days prior to certificate expiration when
   * ACM starts generating EventBridge events. ACM sends one event per day per certificate until the
   * certificate expires. By default, accounts receive events starting 45 days before certificate
   * expiration.
   *
   * @returns Success
   *
   * @throws {@link Operations.PutAccountConfigurationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  putAccountConfiguration(
    request: Operations.PutAccountConfigurationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.PutAccountConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#PutAccountConfiguration"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AwsCertificateManagerOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.PutAccountConfigurationError,
      },
      options,
    );
  }

  /**
   * Renew Certificate
   *
   * @remarks
   * Renews an eligible ACM certificate. In order to renew your Amazon Web Services Private CA
   * certificates with ACM, you must first grant the ACM service principal permission to do so. For
   * more information, see Testing Managed Renewal in the ACM User Guide.
   *
   * @returns Success
   *
   * @throws {@link Operations.RenewCertificateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  renewCertificate(
    request: Operations.RenewCertificateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.RenewCertificateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RenewCertificate"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsCertificateManagerOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.RenewCertificateError,
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
   * @throws {@link Operations.RequestCertificate2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  requestCertificate2(
    request: Operations.RequestCertificate2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.RequestCertificate2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RequestCertificate"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsCertificateManagerOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.RequestCertificate2Error,
      },
      options,
    );
  }

  /**
   * Resend Validation Email
   *
   * @remarks
   * Resends the email that requests domain ownership validation. The domain owner or an authorized
   * representative must approve the ACM certificate before it can be issued. The certificate can be
   * approved by clicking a link in the mail to navigate to the Amazon certificate approval website
   * and then clicking I Approve. However, the validation email can be blocked by spam filters.
   * Therefore, if you do not receive the original mail, you can request that the mail be resent
   * within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since
   * your original request or since your last attempt to resend validation mail, you must request a
   * new certificate. For more information about setting up your contact email addresses, see
   * Configure Email for your Domain.
   *
   * @returns Success
   *
   * @throws {@link Operations.ResendValidationEmailError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  resendValidationEmail(
    request: Operations.ResendValidationEmailRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ResendValidationEmailError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ResendValidationEmail"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AwsCertificateManagerOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ResendValidationEmailError,
      },
      options,
    );
  }

  /**
   * Tag Resource
   *
   * @remarks
   * Adds one or more tags to an ACM resource. Tags are labels that you can use to identify and
   * organize your Amazon Web Services resources. Each tag consists of a key and an optional value.
   * Use this action for all ACM resource types except the certificate resource type. For
   * certificate resources, use AddTagsToCertificate instead. To remove one or more tags, use the
   * UntagResource action. To view all of the tags that have been applied to a resource, use the
   * ListTagsForResource action.
   *
   * @returns Success
   *
   * @throws {@link Operations.TagResourceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  tagResource(
    request: Operations.TagResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.TagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#TagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget7AwsCertificateManagerOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.TagResourceError,
      },
      options,
    );
  }

  /**
   * Untag Resource
   *
   * @remarks
   * Removes one or more tags from an ACM resource. Use this action for all ACM resource types
   * except the certificate resource type. For certificate resources, use RemoveTagsFromCertificate
   * instead. To add one or more tags, use the TagResource action. To view all of the tags that have
   * been applied to a resource, use the ListTagsForResource action.
   *
   * @returns Success
   *
   * @throws {@link Operations.UntagResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  untagResource(
    request: Operations.UntagResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.UntagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UntagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget8AwsCertificateManagerOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.UntagResourceError,
      },
      options,
    );
  }

  /**
   * Update Certificate Options
   *
   * @remarks
   * Updates certificate options. You can use this operation to change the domain validation method
   * or specify whether to export your certificate. For more information, see Migrate from email to
   * DNS validation and Certificate Manager Exportable Managed Certificates.
   *
   * @returns Success
   *
   * @throws {@link Operations.UpdateCertificateOptionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateCertificateOptions(
    request: Operations.UpdateCertificateOptionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.UpdateCertificateOptionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateCertificateOptions"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget9Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.UpdateCertificateOptionsError,
      },
      options,
    );
  }
}

export namespace Operations {
  export type GetAccountConfigurationRequest = {
    xAmzTarget: XAmzTarget3AwsCertificateManagerOperationsApi;
  };

  export class GetAccountConfigurationError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetAccountConfigurationError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type GetAcmeExternalAccountBindingCredentialsRequestParams = {
    xAmzTarget: XAmzTarget5AwsCertificateManagerOperationsApi;
  };

  export class GetAcmeExternalAccountBindingCredentialsError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAcmeExternalAccountBindingCredentialsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListCertificateDomainValidationsRequestParams = {
    xAmzTarget: XAmzTarget6AwsCertificateManagerOperationsApi;
  };

  export class ListCertificateDomainValidationsError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListCertificateDomainValidationsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type PutAccountConfigurationRequestParams = {
    xAmzTarget: XAmzTarget4AwsCertificateManagerOperationsApi;
  };

  export class PutAccountConfigurationError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PutAccountConfigurationError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RenewCertificateRequestParams = {
    xAmzTarget: XAmzTargetAwsCertificateManagerOperationsApi;
  };

  export class RenewCertificateError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RenewCertificateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RequestCertificate2Request = {
    xAmzTarget: XAmzTarget1AwsCertificateManagerOperationsApi;
  };

  export class RequestCertificate2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RequestCertificate2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ResendValidationEmailRequestParams = {
    xAmzTarget: XAmzTarget2AwsCertificateManagerOperationsApi;
  };

  export class ResendValidationEmailError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ResendValidationEmailError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type TagResourceRequestParams = {
    xAmzTarget: XAmzTarget7AwsCertificateManagerOperationsApi;
  };

  export class TagResourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<TagResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UntagResourceRequestParams = {
    xAmzTarget: XAmzTarget8AwsCertificateManagerOperationsApi;
  };

  export class UntagResourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UntagResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateCertificateOptionsRequestParams = {
    xAmzTarget: XAmzTarget9;
  };

  export class UpdateCertificateOptionsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCertificateOptionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
