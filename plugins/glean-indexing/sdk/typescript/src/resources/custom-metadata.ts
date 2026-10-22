import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  customMetadataPutRequestSchema,
  type CustomMetadataPutRequest,
} from "../models/custom-metadata-put-request.js";
import { customMetadataSchemaSchema, type CustomMetadataSchema } from "../models/custom-metadata-schema.js";
import { errorInfoResponseSchema, type ErrorInfoResponse } from "../models/error-info-response.js";
import { successResponseSchema, type SuccessResponse } from "../models/success-response.js";
import type { Servers } from "../servers.js";

export class CustomMetadata {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add or update custom metadata
   *
   * @remarks
   * Associates custom metadata with a specific document. Custom metadata enables you to enrich
   * documents with additional structured information that can be used for search, filtering, and
   * faceting.
   *
   * @returns OK
   *
   * @throws {@link CustomMetadata.AddOrUpdateCustomMetadataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  addOrUpdateCustomMetadata(
    request: CustomMetadata.AddOrUpdateCustomMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponse, CustomMetadata.AddOrUpdateCustomMetadataError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/rest/api/index/document/{docId}/custom-metadata/{groupName}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "groupName", value: request.groupName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customMetadataPutRequestSchema },
      },
      {
        success: { kind: "json", schema: successResponseSchema },
        errorFactory: CustomMetadata.AddOrUpdateCustomMetadataError,
      },
      options,
    );
  }

  /**
   * Create or update metadata schema
   *
   * @remarks
   * Defines or updates the schema for a metadata group. Schemas should be defined before indexing
   * metadata.
   *
   * @returns OK
   *
   * @throws {@link CustomMetadata.CreateOrUpdateMetadataSchemaError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createOrUpdateMetadataSchema(
    request: CustomMetadata.CreateOrUpdateMetadataSchemaRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponse, CustomMetadata.CreateOrUpdateMetadataSchemaError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/rest/api/index/custom-metadata/schema/{groupName}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "groupName", value: request.groupName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customMetadataSchemaSchema },
      },
      {
        success: { kind: "json", schema: successResponseSchema },
        errorFactory: CustomMetadata.CreateOrUpdateMetadataSchemaError,
      },
      options,
    );
  }

  /**
   * Remove custom metadata
   *
   * @remarks
   * Removes all custom metadata for the specified metadata group from a document.
   *
   * @returns OK
   *
   * @throws {@link CustomMetadata.RemoveCustomMetadataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  removeCustomMetadata(
    request: CustomMetadata.RemoveCustomMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponse, CustomMetadata.RemoveCustomMetadataError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/rest/api/index/document/{docId}/custom-metadata/{groupName}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "groupName", value: request.groupName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: successResponseSchema },
        errorFactory: CustomMetadata.RemoveCustomMetadataError,
      },
      options,
    );
  }

  /**
   * Remove metadata schema
   *
   * @remarks
   * Deletes the schema definition for a metadata group. This does not delete existing metadata
   * values on documents.
   *
   * @returns OK
   *
   * @throws {@link CustomMetadata.RemoveMetadataSchemaError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  removeMetadataSchema(
    request: CustomMetadata.RemoveMetadataSchemaRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponse, CustomMetadata.RemoveMetadataSchemaError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/rest/api/index/custom-metadata/schema/{groupName}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "groupName", value: request.groupName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: successResponseSchema },
        errorFactory: CustomMetadata.RemoveMetadataSchemaError,
      },
      options,
    );
  }

  /**
   * Retrieve metadata schema
   *
   * @remarks
   * Retrieves the current schema definition for a metadata group.
   *
   * @returns OK
   *
   * @throws {@link CustomMetadata.RetrieveMetadataSchemaError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  retrieveMetadataSchema(
    request: CustomMetadata.RetrieveMetadataSchemaRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomMetadataSchema, CustomMetadata.RetrieveMetadataSchemaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rest/api/index/custom-metadata/schema/{groupName}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "groupName", value: request.groupName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customMetadataSchemaSchema },
        errorFactory: CustomMetadata.RetrieveMetadataSchemaError,
      },
      options,
    );
  }
}

export namespace CustomMetadata {
  export type AddOrUpdateCustomMetadataRequest = {
    /** Unique Glean identifier of the document */
    docId: string;
    /** Name of the metadata group as specified while adding schema */
    groupName: string;
    body: CustomMetadataPutRequest;
  };

  export class AddOrUpdateCustomMetadataError extends ApiError {
    declare readonly payload:
      | Declared<"errorInfoResponse", ErrorInfoResponse>
      | Declared<"errorInfoResponse2", ErrorInfoResponse>
      | Declared<"errorInfoResponse3", ErrorInfoResponse>
      | Declared<"errorInfoResponse4", ErrorInfoResponse>
      | Declared<"errorInfoResponse5", ErrorInfoResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddOrUpdateCustomMetadataError> = [
      { on: 400, kind: "errorInfoResponse", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 401, kind: "errorInfoResponse2", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 404, kind: "errorInfoResponse3", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 429, kind: "errorInfoResponse4", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 500, kind: "errorInfoResponse5", decode: { kind: "json", schema: errorInfoResponseSchema } },
    ];
  }

  export type CreateOrUpdateMetadataSchemaRequest = {
    /** Name of the metadata group schema */
    groupName: string;
    body: CustomMetadataSchema;
  };

  export class CreateOrUpdateMetadataSchemaError extends ApiError {
    declare readonly payload:
      | Declared<"errorInfoResponse", ErrorInfoResponse>
      | Declared<"errorInfoResponse2", ErrorInfoResponse>
      | Declared<"errorInfoResponse3", ErrorInfoResponse>
      | Declared<"errorInfoResponse4", ErrorInfoResponse>
      | Declared<"errorInfoResponse5", ErrorInfoResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateOrUpdateMetadataSchemaError> = [
      { on: 400, kind: "errorInfoResponse", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 401, kind: "errorInfoResponse2", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 409, kind: "errorInfoResponse3", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 429, kind: "errorInfoResponse4", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 500, kind: "errorInfoResponse5", decode: { kind: "json", schema: errorInfoResponseSchema } },
    ];
  }

  export type RemoveCustomMetadataRequest = {
    /** Unique Glean identifier of the document */
    docId: string;
    /** Name of the metadata group as specified while adding schema */
    groupName: string;
  };

  export class RemoveCustomMetadataError extends ApiError {
    declare readonly payload:
      | Declared<"errorInfoResponse", ErrorInfoResponse>
      | Declared<"errorInfoResponse2", ErrorInfoResponse>
      | Declared<"errorInfoResponse3", ErrorInfoResponse>
      | Declared<"errorInfoResponse4", ErrorInfoResponse>
      | Declared<"errorInfoResponse5", ErrorInfoResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveCustomMetadataError> = [
      { on: 400, kind: "errorInfoResponse", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 401, kind: "errorInfoResponse2", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 404, kind: "errorInfoResponse3", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 429, kind: "errorInfoResponse4", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 500, kind: "errorInfoResponse5", decode: { kind: "json", schema: errorInfoResponseSchema } },
    ];
  }

  export type RemoveMetadataSchemaRequest = {
    /** Name of the metadata group schema */
    groupName: string;
  };

  export class RemoveMetadataSchemaError extends ApiError {
    declare readonly payload:
      | Declared<"errorInfoResponse", ErrorInfoResponse>
      | Declared<"errorInfoResponse2", ErrorInfoResponse>
      | Declared<"errorInfoResponse3", ErrorInfoResponse>
      | Declared<"errorInfoResponse4", ErrorInfoResponse>
      | Declared<"errorInfoResponse5", ErrorInfoResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveMetadataSchemaError> = [
      { on: 400, kind: "errorInfoResponse", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 401, kind: "errorInfoResponse2", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 404, kind: "errorInfoResponse3", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 429, kind: "errorInfoResponse4", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 500, kind: "errorInfoResponse5", decode: { kind: "json", schema: errorInfoResponseSchema } },
    ];
  }

  export type RetrieveMetadataSchemaRequest = {
    /** Name of the metadata group schema */
    groupName: string;
  };

  export class RetrieveMetadataSchemaError extends ApiError {
    declare readonly payload:
      | Declared<"errorInfoResponse", ErrorInfoResponse>
      | Declared<"errorInfoResponse2", ErrorInfoResponse>
      | Declared<"errorInfoResponse3", ErrorInfoResponse>
      | Declared<"errorInfoResponse4", ErrorInfoResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RetrieveMetadataSchemaError> = [
      { on: 401, kind: "errorInfoResponse", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 404, kind: "errorInfoResponse2", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 429, kind: "errorInfoResponse3", decode: { kind: "json", schema: errorInfoResponseSchema } },
      { on: 500, kind: "errorInfoResponse4", decode: { kind: "json", schema: errorInfoResponseSchema } },
    ];
  }
}
