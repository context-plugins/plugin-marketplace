import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  errorContentstackAssetsApiSchema,
  type ErrorContentstackAssetsApi,
} from "../models/error-contentstack-assets-api.js";
import { globalFieldListSchema, type GlobalFieldList } from "../models/global-field-list.js";
import { globalFieldSchema, type GlobalField } from "../models/global-field.js";
import type { Servers } from "../servers.js";

/**
 * Global fields are reusable field groups that can be referenced across multiple content types
 * within a Contentstack stack.
 */
export class GlobalFields {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all global fields
   *
   * @remarks
   * Fetches all reusable global field definitions available in the stack. Global fields can be
   * embedded in content type schemas to create consistent field structures across multiple content
   * types.
   *
   * @returns A list of global fields defined in the stack.
   *
   * @throws {@link GlobalFields.GetAllGlobalFieldsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllGlobalFields(
    request: GlobalFields.GetAllGlobalFieldsRequest,
    options?: RequestOptions,
  ): ApiPromise<GlobalFieldList, GlobalFields.GetAllGlobalFieldsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAssetsApi("/global_fields"),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [],
        query: [],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: globalFieldListSchema },
        errorFactory: GlobalFields.GetAllGlobalFieldsError,
      },
      options,
    );
  }

  /**
   * Get a single global field
   *
   * @remarks
   * Returns the schema and metadata for a specific global field identified by its UID.
   *
   * @returns The requested global field object.
   *
   * @throws {@link GlobalFields.GetSingleGlobalFieldError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSingleGlobalField(
    request: GlobalFields.GetSingleGlobalFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<GlobalField, GlobalFields.GetSingleGlobalFieldError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAssetsApi("/global_fields/{global_field_uid}"),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [{ name: "global_field_uid", value: request.globalFieldUid, schema: s.string() }],
        query: [],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: globalFieldSchema },
        errorFactory: GlobalFields.GetSingleGlobalFieldError,
      },
      options,
    );
  }
}

export namespace GlobalFields {
  export type GetAllGlobalFieldsRequest = {
    /** The API key for the Contentstack stack. */
    apiKey: string;
    /** The delivery token for the stack environment. */
    accessToken: string;
  };

  export class GetAllGlobalFieldsError extends ApiError {
    declare readonly payload: Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllGlobalFieldsError> = [
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }

  export type GetSingleGlobalFieldRequest = {
    /** The unique identifier (UID) of the global field. */
    globalFieldUid: string;
    /** The API key for the Contentstack stack. */
    apiKey: string;
    /** The delivery token for the stack environment. */
    accessToken: string;
  };

  export class GetSingleGlobalFieldError extends ApiError {
    declare readonly payload:
      | Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi>
      | Declared<"errorContentstackAssetsApi2", ErrorContentstackAssetsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSingleGlobalFieldError> = [
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
      {
        on: 404,
        kind: "errorContentstackAssetsApi2",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }
}
