import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  errorResponseBoomiDataHubGoldenRecordsApiSchema,
  type ErrorResponseBoomiDataHubGoldenRecordsApi,
} from "../models/error-response-boomi-data-hub-golden-records-api.js";
import { modelInputSchema, type ModelInput } from "../models/model-input.js";
import { modelSchema, type Model } from "../models/model.js";
import {
  repositoriesModelsResponseSchema,
  type RepositoriesModelsResponse,
} from "../models/repositories-models-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage data models that define the schema and rules for master data domains.
 */
export class Models {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Boomi Create a model
   *
   * @remarks
   * Creates a new data model within the repository that defines the schema for a master data
   * domain.
   *
   * @returns The created data model.
   *
   * @throws {@link Models.CreateModelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createModel(
    request: Models.CreateModelRequest,
    options?: RequestOptions,
  ): ApiPromise<Model, Models.CreateModelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBoomiDataHubGoldenRecordsApi("/repositories/{repositoryId}/models"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "repositoryId", value: request.repositoryId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: modelInputSchema },
      },
      {
        success: { kind: "json", schema: modelSchema },
        errorFactory: Models.CreateModelError,
      },
      options,
    );
  }

  /**
   * Boomi Delete a model
   *
   * @remarks
   * Permanently deletes a data model from the repository.
   *
   * @returns Deletion successful.
   *
   * @throws {@link Models.DeleteModelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteModel(
    request: Models.DeleteModelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Models.DeleteModelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultBoomiDataHubGoldenRecordsApi(
          "/repositories/{repositoryId}/models/{modelId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "repositoryId", value: request.repositoryId, schema: s.string() },
          { name: "modelId", value: request.modelId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Models.DeleteModelError,
      },
      options,
    );
  }

  /**
   * Boomi Get a model
   *
   * @remarks
   * Retrieves the details and schema of a specific data model.
   *
   * @returns The data model details.
   *
   * @throws {@link Models.GetModelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getModel(
    request: Models.GetModelRequest,
    options?: RequestOptions,
  ): ApiPromise<Model, Models.GetModelError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBoomiDataHubGoldenRecordsApi(
          "/repositories/{repositoryId}/models/{modelId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "repositoryId", value: request.repositoryId, schema: s.string() },
          { name: "modelId", value: request.modelId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: modelSchema },
        errorFactory: Models.GetModelError,
      },
      options,
    );
  }

  /**
   * Boomi List models
   *
   * @remarks
   * Returns all data models defined within a specific repository.
   *
   * @returns A list of data models.
   *
   * @throws {@link Models.ListModelsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listModels(
    request: Models.ListModelsRequest,
    options?: RequestOptions,
  ): ApiPromise<RepositoriesModelsResponse, Models.ListModelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBoomiDataHubGoldenRecordsApi("/repositories/{repositoryId}/models"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "repositoryId", value: request.repositoryId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: repositoriesModelsResponseSchema },
        errorFactory: Models.ListModelsError,
      },
      options,
    );
  }

  /**
   * Boomi Publish a model
   *
   * @remarks
   * Publishes a data model, making it available for domain deployment and data ingestion.
   *
   * @returns The published model.
   *
   * @throws {@link Models.PublishModelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  publishModel(
    request: Models.PublishModelRequest,
    options?: RequestOptions,
  ): ApiPromise<Model, Models.PublishModelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBoomiDataHubGoldenRecordsApi(
          "/repositories/{repositoryId}/models/{modelId}/publish",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "repositoryId", value: request.repositoryId, schema: s.string() },
          { name: "modelId", value: request.modelId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: modelSchema },
        errorFactory: Models.PublishModelError,
      },
      options,
    );
  }
}

export namespace Models {
  export type CreateModelRequest = {
    /** Unique identifier of the DataHub repository. */
    repositoryId: string;
    body: ModelInput;
  };

  export class CreateModelError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi2", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateModelError> = [
      {
        on: 400,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
      {
        on: 401,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi2",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
    ];
  }

  export type DeleteModelRequest = {
    /** Unique identifier of the DataHub repository. */
    repositoryId: string;
    /** Unique identifier of the data model. */
    modelId: string;
  };

  export class DeleteModelError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi2", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteModelError> = [
      {
        on: 401,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi2",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
    ];
  }

  export type GetModelRequest = {
    /** Unique identifier of the DataHub repository. */
    repositoryId: string;
    /** Unique identifier of the data model. */
    modelId: string;
  };

  export class GetModelError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi2", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetModelError> = [
      {
        on: 401,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi2",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
    ];
  }

  export type ListModelsRequest = {
    /** Unique identifier of the DataHub repository. */
    repositoryId: string;
  };

  export class ListModelsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi2", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListModelsError> = [
      {
        on: 401,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi2",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
    ];
  }

  export type PublishModelRequest = {
    /** Unique identifier of the DataHub repository. */
    repositoryId: string;
    /** Unique identifier of the data model. */
    modelId: string;
  };

  export class PublishModelError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi2", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<PublishModelError> = [
      {
        on: 401,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi2",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
    ];
  }
}
