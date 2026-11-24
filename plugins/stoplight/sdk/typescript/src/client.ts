import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { ApiError, type Declared, type Undeclared } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { noneAuth } from "./core/auth/schemes.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import type { ErrorDecoders } from "./core/response-decoder.js";
import * as host from "./core/runtime-environment.js";
import { uuid } from "./core/uuid.js";
import * as s from "./core/validation/index.js";
import { Format, formatSchema } from "./models/format.js";
import { versionsImportRequestSchema, type VersionsImportRequest } from "./models/versions-import-request.js";
import {
  versionsImportResponseSchema,
  type VersionsImportResponse,
} from "./models/versions-import-response.js";
import {
  versionsPublishAnonRequestSchema,
  type VersionsPublishAnonRequest,
} from "./models/versions-publish-anon-request.js";
import {
  versionsPublishAnonResponseSchema,
  type VersionsPublishAnonResponse,
} from "./models/versions-publish-anon-response.js";
import {
  versionsPublishResponseSchema,
  type VersionsPublishResponse,
} from "./models/versions-publish-response.js";
import {
  versionsUnpublishResponseSchema,
  type VersionsUnpublishResponse,
} from "./models/versions-unpublish-response.js";
import { buildServers, type Servers } from "./servers.js";

export class StoplightClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "STOPLIGHT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "StoplightClient/0.1.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.1.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Export
   *
   * @remarks
   * Export a version to your choice of API specification.
   *
   * ### Allowed Formats:
   *
   * - oas.json
   * - oas.yaml
   * - raml08.yaml
   * - raml10.yaml
   * - stoplight.json
   * - stoplight.yaml
   *
   * The stoplight format actually returns OAS (Swagger 2) with x-stoplight annotations. If you are
   * exporting with the intent on importing back into Stoplight, this export format preserves the
   * most information.
   *
   * ### Example URL:
   *
   * `https://api.stoplight.io/v1/versions/123/export/oas.json`
   *
   * @throws {@link StoplightClient.GetVersionsVersionIdExportFormatError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link StoplightError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVersionsVersionIdExportFormat(
    request: StoplightClient.GetVersionsVersionIdExportFormatRequest,
    options?: RequestOptions,
  ): ApiPromise<unknown, StoplightClient.GetVersionsVersionIdExportFormatError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/versions/{versionId}/export/{format}"),
        auth: noneAuth,
        pathParams: [
          { name: "versionId", value: request.versionId, schema: s.string() },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.OasJson) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: StoplightClient.GetVersionsVersionIdExportFormatError,
      },
      options,
    );
  }

  /**
   * Publish Anonymous
   *
   * @remarks
   * Anonymously publish to API Docs.
   *
   * This endpoint will take a JSON spec or a URL to a swagger or raml spec.
   *
   * ```
   * {
   * "specData": {...}
   * }
   * ```
   *
   * or
   *
   * ```
   * {
   * "url": "http://petstore.swagger.io/v2/swagger.json"
   * }
   * ```
   *
   * The spec will be published to api-docs.io anonymously, which means you will not be able to
   * update or remove this documentation.
   *
   * The response will contain a url to the published documentation.
   *
   * ```
   * {
   * "url": "https://swagger-petstore.api-docs.io/v1.0.0"
   * }
   * ```
   *
   * The limitations of anonymous publishing
   * * Cannot update/remove the documentation
   * * Cannot choose the subdomain
   * * Cannot choose the version
   * * Cannot add theming
   *
   * @throws {@link StoplightClient.PostVersionsPublishAnonError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link StoplightError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postVersionsPublishAnon(
    request: StoplightClient.PostVersionsPublishAnonRequest = {},
    options?: RequestOptions,
  ): ApiPromise<VersionsPublishAnonResponse, StoplightClient.PostVersionsPublishAnonError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/versions/publish/anon"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => versionsPublishAnonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: versionsPublishAnonResponseSchema },
        errorFactory: StoplightClient.PostVersionsPublishAnonError,
      },
      options,
    );
  }

  /**
   * Publish
   *
   * @remarks
   * Re-publish an API version in Stoplight. This will re-publish the given API version, with
   * whatever publish settings have already been setup in the app.
   *
   * This will only work with APIs that have previously been published at least once.
   *
   * This works well with the #endpoint:957qEfc97BB5XGAeZ endpoint to augment your continuous
   * integration processes, and automatically re-publish your documentation when certain events
   * happen. Once such scenario is:
   *
   * 1. Swagger is generated from your codebase, and pushed up to Github.
   * 2. A simple script that you write sends a request to the Stoplight API to import the new
   *    specification, passing in the URL to the swagger file on Github.
   * 3. After the import succeeds, and your API in Stoplight is up to date, the script sends a
   *    request to the Stoplight API (this endpoint) to re-publish your documentation.
   *
   * @throws {@link StoplightClient.PostVersionsVersionIdPublishError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link StoplightError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postVersionsVersionIdPublish(
    request: StoplightClient.PostVersionsVersionIdPublishRequest,
    options?: RequestOptions,
  ): ApiPromise<VersionsPublishResponse, StoplightClient.PostVersionsVersionIdPublishError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/versions/{versionId}/publish"),
        auth: this.#auth.authorization,
        pathParams: [{ name: "versionId", value: request.versionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: versionsPublishResponseSchema },
        errorFactory: StoplightClient.PostVersionsVersionIdPublishError,
      },
      options,
    );
  }

  /**
   * Import
   *
   * @remarks
   * Import the given specification into an existing version.
   *
   * **Warning, this is a destructive action! Any resources present in both the existing version,
   * and the specification being imported, will be overwritten.**
   *
   * This endpoint is particularly useful when you manage a specification file (Swagger or RAML)
   * outside of Stoplight, and want to keep your Stoplight API version up to date as that
   * specification changes.
   *
   * By default, a "merge" is performed when importing. If a resource exists in the specification
   * that you are importing, and in the Stoplight API, the resource will be overwritten. If a
   * resource exists in the Stoplight API, but not in the spefication that you are importing, the
   * resource will be left alone (and not deleted).
   *
   * You can include an optional `options` property in the request body, to indicate if you would
   * like to perform more of a replacement (instead of a merge). The options are documented in full
   * in the response definition below these notes.
   *
   * Take this request + request body for example:
   *
   * `PUT https://api.stoplight.io/v1/versions/123/import`
   * ```json
   * {
   * "url": "http://petstore.swagger.io/v2/swagger.json",
   * "options": {
   * "removeExtraEndpoints": true,
   * "removeExtraSchemas": true
   * }
   * }
   * ```
   *
   * This request will grab the swagger specification described at
   * `http://petstore.swagger.io/v2/swagger.json`, and import it into the Stoplight API version with
   * id `123`. Additionally, it will delete any existing endpoints or models that are not described
   * in the petstore swagger being imported.
   *
   * Instead of a URL, you can provide the actual specification to be imported, either as a string
   * (in the case of YAML) or an object (in the case of JSON). That request would look something
   * like this:
   *
   * `PUT https://api.stoplight.io/v1/versions/123/import`
   * ```json
   * {
   * "specData": {
   * "swagger": "2.0",
   * "info": {}
   * ... rest of spec
   * }
   * }
   * ```
   *
   * @throws {@link StoplightClient.PutVersionsVersionIdImportError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link StoplightError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putVersionsVersionIdImport(
    request: StoplightClient.PutVersionsVersionIdImportRequest,
    options?: RequestOptions,
  ): ApiPromise<VersionsImportResponse, StoplightClient.PutVersionsVersionIdImportError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/versions/{versionId}/import"),
        auth: this.#auth.authorization,
        pathParams: [{ name: "versionId", value: request.versionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => versionsImportRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: versionsImportResponseSchema },
        errorFactory: StoplightClient.PutVersionsVersionIdImportError,
      },
      options,
    );
  }

  /**
   * Unpublish
   *
   * @remarks
   * Unpublish the documentation associated with the given API version.
   *
   * @throws {@link StoplightClient.PutVersionsVersionIdUnpublishError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link StoplightError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putVersionsVersionIdUnpublish(
    request: StoplightClient.PutVersionsVersionIdUnpublishRequest,
    options?: RequestOptions,
  ): ApiPromise<VersionsUnpublishResponse, StoplightClient.PutVersionsVersionIdUnpublishError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/versions/{versionId}/unpublish"),
        auth: this.#auth.authorization,
        pathParams: [{ name: "versionId", value: request.versionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: versionsUnpublishResponseSchema },
        errorFactory: StoplightClient.PutVersionsVersionIdUnpublishError,
      },
      options,
    );
  }
}

export namespace StoplightClient {
  export type GetVersionsVersionIdExportFormatRequest = {
    /** This is the unique identifier for the version. */
    versionId: string;
    /** The specification / format that you want to export. @default Format.OasJson */
    format?: Format;
  };

  export class GetVersionsVersionIdExportFormatError extends ApiError {
    declare readonly payload:
      | Declared<"error401", Record<string, unknown>>
      | Declared<"error404", Record<string, unknown>>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVersionsVersionIdExportFormatError> = [
      { on: 401, kind: "error401", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type PostVersionsPublishAnonRequest = {
    body?: VersionsPublishAnonRequest;
  };

  export class PostVersionsPublishAnonError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Record<string, unknown>>
      | Declared<"error401", Record<string, unknown>>
      | Declared<"error404", Record<string, unknown>>
      | Declared<"error500", Record<string, unknown>>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostVersionsPublishAnonError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type PostVersionsVersionIdPublishRequest = {
    /** This is the unique identifier for the version. */
    versionId: string;
  };

  export class PostVersionsVersionIdPublishError extends ApiError {
    declare readonly payload:
      | Declared<"error401", Record<string, unknown>>
      | Declared<"error404", Record<string, unknown>>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostVersionsVersionIdPublishError> = [
      { on: 401, kind: "error401", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type PutVersionsVersionIdImportRequest = {
    /** This is the unique identifier for the version. */
    versionId: string;
    body?: VersionsImportRequest;
  };

  export class PutVersionsVersionIdImportError extends ApiError {
    declare readonly payload:
      | Declared<"error401", Record<string, unknown>>
      | Declared<"error404", Record<string, unknown>>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutVersionsVersionIdImportError> = [
      { on: 401, kind: "error401", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type PutVersionsVersionIdUnpublishRequest = {
    /** This is the unique identifier for the version. */
    versionId: string;
  };

  export class PutVersionsVersionIdUnpublishError extends ApiError {
    declare readonly payload:
      | Declared<"error401", Record<string, unknown>>
      | Declared<"error404", Record<string, unknown>>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutVersionsVersionIdUnpublishError> = [
      { on: 401, kind: "error401", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }
}
