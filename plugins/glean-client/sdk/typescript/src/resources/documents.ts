import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  getDocPermissionsRequestSchema,
  type GetDocPermissionsRequest,
} from "../models/get-doc-permissions-request.js";
import {
  getDocPermissionsResponseSchema,
  type GetDocPermissionsResponse,
} from "../models/get-doc-permissions-response.js";
import {
  getDocumentsByFacetsRequestSchema,
  type GetDocumentsByFacetsRequest,
} from "../models/get-documents-by-facets-request.js";
import {
  getDocumentsByFacetsResponseSchema,
  type GetDocumentsByFacetsResponse,
} from "../models/get-documents-by-facets-response.js";
import { getDocumentsRequestSchema, type GetDocumentsRequest } from "../models/get-documents-request.js";
import { getDocumentsResponseSchema, type GetDocumentsResponse } from "../models/get-documents-response.js";
import type { Servers } from "../servers.js";

export class Documents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Read document permissions
   *
   * @remarks
   * Read the emails of all users who have access to the given document.
   *
   * @returns OK
   *
   * @throws {@link Documents.GetdocpermissionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getdocpermissions(
    request: Documents.GetdocpermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetDocPermissionsResponse, Documents.GetdocpermissionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/getdocpermissions"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: getDocPermissionsRequestSchema },
      },
      {
        success: { kind: "json", schema: getDocPermissionsResponseSchema },
        errorFactory: Documents.GetdocpermissionsError,
      },
      options,
    );
  }

  /**
   * Read documents
   *
   * @remarks
   * Read the documents including metadata (does not include enhanced metadata via
   * `/documentmetadata`) for the given list of Glean Document IDs or URLs specified in the request.
   *
   * @returns OK
   *
   * @throws {@link Documents.GetdocumentsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getdocuments(
    request: Documents.GetdocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetDocumentsResponse, Documents.GetdocumentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/getdocuments"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => getDocumentsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getDocumentsResponseSchema },
        errorFactory: Documents.GetdocumentsError,
      },
      options,
    );
  }

  /**
   * Read documents by facets
   *
   * @remarks
   * Read the documents including metadata (does not include enhanced metadata via
   * `/documentmetadata`) macthing the given facet conditions.
   *
   * @returns OK
   *
   * @throws {@link Documents.GetdocumentsbyfacetsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getdocumentsbyfacets(
    request: Documents.GetdocumentsbyfacetsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetDocumentsByFacetsResponse, Documents.GetdocumentsbyfacetsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/getdocumentsbyfacets"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => getDocumentsByFacetsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getDocumentsByFacetsResponseSchema },
        errorFactory: Documents.GetdocumentsbyfacetsError,
      },
      options,
    );
  }
}

export namespace Documents {
  export type GetdocpermissionsRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Document permissions request */
    body: GetDocPermissionsRequest;
  };

  export class GetdocpermissionsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetdocpermissionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetdocumentsRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Information about documents requested. */
    body?: GetDocumentsRequest;
  };

  export class GetdocumentsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetdocumentsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetdocumentsbyfacetsRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Information about facet conditions for documents to be retrieved. */
    body?: GetDocumentsByFacetsRequest;
  };

  export class GetdocumentsbyfacetsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetdocumentsbyfacetsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
