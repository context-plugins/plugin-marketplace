import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  extensionListResponseSchema,
  type ExtensionListResponse,
} from "../models/extension-list-response.js";
import { extensionViewSchema, type ExtensionView } from "../models/extension-view.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import type { Servers } from "../servers.js";

export class Extensions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Extension
   *
   * @remarks
   * Permanently delete an extension without affecting running browsers.
   *
   * @returns Successful Response
   *
   * @throws {@link Extensions.DeleteExtensionExtensionsExtensionIdDeleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteExtensionExtensionsExtensionIdDelete(
    request: Extensions.DeleteExtensionExtensionsExtensionIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Extensions.DeleteExtensionExtensionsExtensionIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/extensions/{extension_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "extension_id", value: request.extensionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Extensions.DeleteExtensionExtensionsExtensionIdDeleteError,
      },
      options,
    );
  }

  /**
   * Get Extension
   *
   * @remarks
   * Get an uploaded extension by its ID.
   *
   * @returns Successful Response
   *
   * @throws {@link Extensions.GetExtensionExtensionsExtensionIdGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExtensionExtensionsExtensionIdGet(
    request: Extensions.GetExtensionExtensionsExtensionIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ExtensionView, Extensions.GetExtensionExtensionsExtensionIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/extensions/{extension_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "extension_id", value: request.extensionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: extensionViewSchema },
        errorFactory: Extensions.GetExtensionExtensionsExtensionIdGetError,
      },
      options,
    );
  }

  /**
   * List Extensions
   *
   * @remarks
   * List the extensions uploaded to this project.
   *
   * @returns Successful Response
   *
   * @throws {@link Extensions.ListExtensionsExtensionsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listExtensionsExtensionsGet(
    request: Extensions.ListExtensionsExtensionsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ExtensionListResponse, Extensions.ListExtensionsExtensionsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/extensions"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "pageNumber", value: request.pageNumber, schema: s.defaulted(s.int(), 1) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: extensionListResponseSchema },
        errorFactory: Extensions.ListExtensionsExtensionsGetError,
      },
      options,
    );
  }

  /**
   * Upload Extension
   *
   * @remarks
   * Upload a Manifest V3 extension as a ZIP file with manifest.json at its root.
   *
   * @returns Successful Response
   *
   * @throws {@link Extensions.UploadExtensionExtensionsPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadExtensionExtensionsPost(
    request: Extensions.UploadExtensionExtensionsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ExtensionView, Extensions.UploadExtensionExtensionsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/extensions"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "json", schema: extensionViewSchema },
        errorFactory: Extensions.UploadExtensionExtensionsPostError,
      },
      options,
    );
  }
}

export namespace Extensions {
  export type DeleteExtensionExtensionsExtensionIdDeleteRequest = {
    extensionId: string;
  };

  export class DeleteExtensionExtensionsExtensionIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error503", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteExtensionExtensionsExtensionIdDeleteError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetExtensionExtensionsExtensionIdGetRequest = {
    extensionId: string;
  };

  export class GetExtensionExtensionsExtensionIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExtensionExtensionsExtensionIdGetError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListExtensionsExtensionsGetRequest = {
    /** @default 10 */
    pageSize?: number;
    /** @default 1 */
    pageNumber?: number;
  };

  export const listExtensionsExtensionsGetRequestSchema: Schema<ListExtensionsExtensionsGetRequest> =
    s.lazySchema(() =>
      s.object<ListExtensionsExtensionsGetRequest>({
        pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
        pageNumber: s.defaulted(s.int().check(s.gte(1)), 1),
      }),
    );

  export class ListExtensionsExtensionsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ListExtensionsExtensionsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UploadExtensionExtensionsPostRequest = {
    file: FileInput;
  };

  export class UploadExtensionExtensionsPostError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error413", undefined>
      | Declared<"error422", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadExtensionExtensionsPostError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
