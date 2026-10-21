import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { propertySchema, type Property } from "../models/property.js";
import { resultSchema, type Result } from "../models/result.js";
import { vciBatchIssueRequestSchema, type VciBatchIssueRequest } from "../models/vci-batch-issue-request.js";
import {
  vciBatchIssueResponseSchema,
  type VciBatchIssueResponse,
} from "../models/vci-batch-issue-response.js";
import {
  vciBatchParseResponseSchema,
  type VciBatchParseResponse,
} from "../models/vci-batch-parse-response.js";
import {
  vciDeferredIssueRequestSchema,
  type VciDeferredIssueRequest,
} from "../models/vci-deferred-issue-request.js";
import {
  vciDeferredIssueResponseSchema,
  type VciDeferredIssueResponse,
} from "../models/vci-deferred-issue-response.js";
import {
  vciDeferredParseResponseSchema,
  type VciDeferredParseResponse,
} from "../models/vci-deferred-parse-response.js";
import { vciJwksResponseSchema, type VciJwksResponse } from "../models/vci-jwks-response.js";
import { vciJwtissuerResponseSchema, type VciJwtissuerResponse } from "../models/vci-jwtissuer-response.js";
import { vciMetadataResponseSchema, type VciMetadataResponse } from "../models/vci-metadata-response.js";
import {
  vciOfferCreateResponseSchema,
  type VciOfferCreateResponse,
} from "../models/vci-offer-create-response.js";
import { vciOfferInfoResponseSchema, type VciOfferInfoResponse } from "../models/vci-offer-info-response.js";
import {
  vciSingleIssueRequestSchema,
  type VciSingleIssueRequest,
} from "../models/vci-single-issue-request.js";
import {
  vciSingleIssueResponseSchema,
  type VciSingleIssueResponse,
} from "../models/vci-single-issue-response.js";
import {
  vciSingleParseResponseSchema,
  type VciSingleParseResponse,
} from "../models/vci-single-parse-response.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for implementing and running a Verifiable Credential Issuer (VCI).
 */
export class VerifiableCredentialIssuer {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Issue Batch Credentials
   *
   * @remarks
   * Issue multiple verifiable credentials in batch
   *
   * @returns Batch credential issuance completed successfully
   *
   * @throws {@link VerifiableCredentialIssuer.VciBatchIssueApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vciBatchIssueApi(
    request: VerifiableCredentialIssuer.VciBatchIssueApiRequest,
    options?: RequestOptions,
  ): ApiPromise<VciBatchIssueResponse, VerifiableCredentialIssuer.VciBatchIssueApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/vci/batch/issue"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: vciBatchIssueRequestSchema },
      },
      {
        success: { kind: "json", schema: vciBatchIssueResponseSchema },
        errorFactory: VerifiableCredentialIssuer.VciBatchIssueApiError,
      },
      options,
    );
  }

  /**
   * Parse Batch Credentials
   *
   * @remarks
   * Parse multiple verifiable credentials in batch
   *
   * @returns Batch credential parsing completed successfully
   *
   * @throws {@link VerifiableCredentialIssuer.VciBatchParseApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vciBatchParseApi(
    request: VerifiableCredentialIssuer.VciBatchParseApiRequest,
    options?: RequestOptions,
  ): ApiPromise<VciBatchParseResponse, VerifiableCredentialIssuer.VciBatchParseApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/vci/batch/parse"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "accessToken", value: request.accessToken, schema: s.optional(s.string()) },
            { name: "requestContent", value: request.requestContent, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: vciBatchParseResponseSchema },
        errorFactory: VerifiableCredentialIssuer.VciBatchParseApiError,
      },
      options,
    );
  }

  /**
   * Issue Deferred Credential
   *
   * @remarks
   * Issue a deferred verifiable credential
   *
   * @throws {@link VerifiableCredentialIssuer.VciDeferredIssueApiError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vciDeferredIssueApi(
    request: VerifiableCredentialIssuer.VciDeferredIssueApiRequest,
    options?: RequestOptions,
  ): ApiPromise<VciDeferredIssueResponse, VerifiableCredentialIssuer.VciDeferredIssueApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/vci/deferred/issue"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: vciDeferredIssueRequestSchema },
      },
      {
        success: { kind: "json", schema: vciDeferredIssueResponseSchema },
        errorFactory: VerifiableCredentialIssuer.VciDeferredIssueApiError,
      },
      options,
    );
  }

  /**
   * Parse Deferred Credential
   *
   * @remarks
   * Parse a deferred verifiable credential
   *
   * @throws {@link VerifiableCredentialIssuer.VciDeferredParseApiError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vciDeferredParseApi(
    request: VerifiableCredentialIssuer.VciDeferredParseApiRequest,
    options?: RequestOptions,
  ): ApiPromise<VciDeferredParseResponse, VerifiableCredentialIssuer.VciDeferredParseApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/vci/deferred/parse"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "accessToken", value: request.accessToken, schema: s.optional(s.string()) },
            { name: "requestContent", value: request.requestContent, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: vciDeferredParseResponseSchema },
        errorFactory: VerifiableCredentialIssuer.VciDeferredParseApiError,
      },
      options,
    );
  }

  /**
   * Get JSON Web Key Set
   *
   * @remarks
   * Get JSON Web Key Set for VCI
   *
   * @throws {@link VerifiableCredentialIssuer.VciJwksApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vciJwksApi(
    request: VerifiableCredentialIssuer.VciJwksApiRequest,
    options?: RequestOptions,
  ): ApiPromise<VciJwksResponse, VerifiableCredentialIssuer.VciJwksApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/vci/jwks"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "pretty", value: request.pretty, schema: s.boolean() }],
        },
      },
      {
        success: { kind: "json", schema: vciJwksResponseSchema },
        errorFactory: VerifiableCredentialIssuer.VciJwksApiError,
      },
      options,
    );
  }

  /**
   * Get JWT Issuer Information
   *
   * @remarks
   * Get JWT issuer information for VCI
   *
   * @throws {@link VerifiableCredentialIssuer.VciJwtissuerApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vciJwtissuerApi(
    request: VerifiableCredentialIssuer.VciJwtissuerApiRequest,
    options?: RequestOptions,
  ): ApiPromise<VciJwtissuerResponse, VerifiableCredentialIssuer.VciJwtissuerApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/vci/jwtissuer"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "pretty", value: request.pretty, schema: s.boolean() }],
        },
      },
      {
        success: { kind: "json", schema: vciJwtissuerResponseSchema },
        errorFactory: VerifiableCredentialIssuer.VciJwtissuerApiError,
      },
      options,
    );
  }

  /**
   * Get Verifiable Credential Issuer Metadata
   *
   * @remarks
   * Get verifiable credential issuer metadata
   *
   * @returns VCI metadata retrieved successfully
   *
   * @throws {@link VerifiableCredentialIssuer.VciMetadataApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vciMetadataApi(
    request: VerifiableCredentialIssuer.VciMetadataApiRequest,
    options?: RequestOptions,
  ): ApiPromise<VciMetadataResponse, VerifiableCredentialIssuer.VciMetadataApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/vci/metadata"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "pretty", value: request.pretty, schema: s.boolean() }],
        },
      },
      {
        success: { kind: "json", schema: vciMetadataResponseSchema },
        errorFactory: VerifiableCredentialIssuer.VciMetadataApiError,
      },
      options,
    );
  }

  /**
   * Create Credential Offer
   *
   * @remarks
   * Create a verifiable credential offer
   *
   * @throws {@link VerifiableCredentialIssuer.VciOfferCreateApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vciOfferCreateApi(
    request: VerifiableCredentialIssuer.VciOfferCreateApiRequest,
    options?: RequestOptions,
  ): ApiPromise<VciOfferCreateResponse, VerifiableCredentialIssuer.VciOfferCreateApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/vci/offer/create"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "authorizationCodeGrantIncluded",
              value: request.authorizationCodeGrantIncluded,
              schema: s.optional(s.boolean()),
            },
            {
              name: "issuerStateIncluded",
              value: request.issuerStateIncluded,
              schema: s.optional(s.boolean()),
            },
            {
              name: "preAuthorizedCodeGrantIncluded",
              value: request.preAuthorizedCodeGrantIncluded,
              schema: s.optional(s.boolean()),
            },
            { name: "subject", value: request.subject, schema: s.optional(s.string()) },
            { name: "duration", value: request.duration, schema: s.optional(s.int()) },
            { name: "context", value: request.context, schema: s.optional(s.string()) },
            {
              name: "properties",
              value: request.properties,
              schema: s.optional(s.array(s.lazy(() => propertySchema))),
            },
            { name: "jwtAtClaims", value: request.jwtAtClaims, schema: s.optional(s.string()) },
            { name: "authTime", value: request.authTime, schema: s.optional(s.int()) },
            { name: "acr", value: request.acr, schema: s.optional(s.string()) },
            {
              name: "credentialConfigurationIds",
              value: request.credentialConfigurationIds,
              schema: s.optional(s.array(s.string())),
            },
            { name: "txCode", value: request.txCode, schema: s.optional(s.string()) },
            { name: "txCodeInputMode", value: request.txCodeInputMode, schema: s.optional(s.string()) },
            { name: "txCodeDescription", value: request.txCodeDescription, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: vciOfferCreateResponseSchema },
        errorFactory: VerifiableCredentialIssuer.VciOfferCreateApiError,
      },
      options,
    );
  }

  /**
   * Get Credential Offer Information
   *
   * @remarks
   * Get information about a verifiable credential offer
   *
   * @returns Credential offer info retrieved successfully
   *
   * @throws {@link VerifiableCredentialIssuer.VciOfferInfoApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vciOfferInfoApi(
    request: VerifiableCredentialIssuer.VciOfferInfoApiRequest,
    options?: RequestOptions,
  ): ApiPromise<VciOfferInfoResponse, VerifiableCredentialIssuer.VciOfferInfoApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/vci/offer/info"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "identifier", value: request.identifier, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: vciOfferInfoResponseSchema },
        errorFactory: VerifiableCredentialIssuer.VciOfferInfoApiError,
      },
      options,
    );
  }

  /**
   * Issue Single Credential
   *
   * @remarks
   * Issue a single verifiable credential
   *
   * @throws {@link VerifiableCredentialIssuer.VciSingleIssueApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vciSingleIssueApi(
    request: VerifiableCredentialIssuer.VciSingleIssueApiRequest,
    options?: RequestOptions,
  ): ApiPromise<VciSingleIssueResponse, VerifiableCredentialIssuer.VciSingleIssueApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/vci/single/issue"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: vciSingleIssueRequestSchema },
      },
      {
        success: { kind: "json", schema: vciSingleIssueResponseSchema },
        errorFactory: VerifiableCredentialIssuer.VciSingleIssueApiError,
      },
      options,
    );
  }

  /**
   * Parse Single Credential
   *
   * @remarks
   * Parse a single verifiable credential
   *
   * @throws {@link VerifiableCredentialIssuer.VciSingleParseApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vciSingleParseApi(
    request: VerifiableCredentialIssuer.VciSingleParseApiRequest,
    options?: RequestOptions,
  ): ApiPromise<VciSingleParseResponse, VerifiableCredentialIssuer.VciSingleParseApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/vci/single/parse"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "accessToken", value: request.accessToken, schema: s.optional(s.string()) },
            { name: "requestContent", value: request.requestContent, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: vciSingleParseResponseSchema },
        errorFactory: VerifiableCredentialIssuer.VciSingleParseApiError,
      },
      options,
    );
  }
}

export namespace VerifiableCredentialIssuer {
  export type VciBatchIssueApiRequest = {
    /** A service ID. */
    serviceId: string;
    body: VciBatchIssueRequest;
  };

  export class VciBatchIssueApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<VciBatchIssueApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type VciBatchParseApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The access token that came along with the credential request. */
    accessToken?: string;
    /** The message body of the batch credential request. */
    requestContent?: string;
  };

  export class VciBatchParseApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<VciBatchParseApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type VciDeferredIssueApiRequest = {
    /** A service ID. */
    serviceId: string;
    body: VciDeferredIssueRequest;
  };

  export class VciDeferredIssueApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<VciDeferredIssueApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type VciDeferredParseApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The access token that came along with the deferred credential request. */
    accessToken?: string;
    /** The message body of the deferred credential request. */
    requestContent?: string;
  };

  export class VciDeferredParseApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<VciDeferredParseApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type VciJwksApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The flag indicating whether the metadata is written in the pretty format or not. */
    pretty: boolean;
  };

  export class VciJwksApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<VciJwksApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type VciJwtissuerApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The flag indicating whether the metadata is written in the pretty format or not. */
    pretty: boolean;
  };

  export class VciJwtissuerApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<VciJwtissuerApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type VciMetadataApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The flag indicating whether the metadata is written in the pretty format or not. */
    pretty: boolean;
  };

  export class VciMetadataApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<VciMetadataApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type VciOfferCreateApiRequest = {
    /** A service ID. */
    serviceId: string;
    /**
     * The flag indicating whether the `authorization_code` object is included in the `grants`
     * object.
     */
    authorizationCodeGrantIncluded?: boolean;
    /**
     * The flag indicating whether the `issuer_state` property is included in the
     * `authorization_code` object in the `grants` object.
     */
    issuerStateIncluded?: boolean;
    /**
     * The flag to include the `urn:ietf:params:oauth:grant-type:pre-authorized_code` object in the
     * `grants` object.
     */
    preAuthorizedCodeGrantIncluded?: boolean;
    /** The subject associated with the credential offer. */
    subject?: string;
    /** The duration of the credential offer. */
    duration?: number;
    /** The general-purpose arbitrary string. */
    context?: string;
    /** Extra properties to associate with the credential offer. */
    properties?: Property[];
    /** Additional claims that are added to the payload part of the JWT access token. */
    jwtAtClaims?: string;
    /**
     * The time at which the user authentication was performed during the course of issuing the
     * credential offer.
     */
    authTime?: number;
    /**
     * The Authentication Context Class Reference of the user authentication performed during the
     * course of issuing the credential offer.
     */
    acr?: string;
    /** The value of the `credential_configuration_ids` array. */
    credentialConfigurationIds?: string[];
    /** The transaction code that should be associated with the credential offer. */
    txCode?: string;
    /** The input mode of the transaction code. */
    txCodeInputMode?: string;
    /** The description of the transaction code. */
    txCodeDescription?: string;
  };

  export class VciOfferCreateApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<VciOfferCreateApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type VciOfferInfoApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The identifier of the credential offer. */
    identifier?: string;
  };

  export class VciOfferInfoApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<VciOfferInfoApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type VciSingleIssueApiRequest = {
    /** A service ID. */
    serviceId: string;
    body: VciSingleIssueRequest;
  };

  export class VciSingleIssueApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<VciSingleIssueApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type VciSingleParseApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The access token that came along with the credential request. */
    accessToken?: string;
    /** The message body of the credential request. */
    requestContent?: string;
  };

  export class VciSingleParseApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<VciSingleParseApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
