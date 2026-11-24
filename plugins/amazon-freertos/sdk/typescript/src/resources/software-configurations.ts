import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createSoftwareConfigurationRequestSchema,
  type CreateSoftwareConfigurationRequest,
} from "../models/create-software-configuration-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  softwareConfigurationRecordsResponseSchema,
  type SoftwareConfigurationRecordsResponse,
} from "../models/software-configuration-records-response.js";
import { softwareConfigurationSchema, type SoftwareConfiguration } from "../models/software-configuration.js";
import {
  updateSoftwareConfigurationRequestSchema,
  type UpdateSoftwareConfigurationRequest,
} from "../models/update-software-configuration-request.js";
import type { Servers } from "../servers.js";

/**
 * FreeRTOS software configuration management
 */
export class SoftwareConfigurations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Software Configuration
   *
   * @remarks
   * Creates a FreeRTOS software configuration record specifying the libraries and settings for a
   * target hardware platform.
   *
   * @returns Success
   *
   * @throws {@link SoftwareConfigurations.CreateSoftwareConfigurationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonFreeRtosError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSoftwareConfiguration(
    request: SoftwareConfigurations.CreateSoftwareConfigurationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SoftwareConfiguration, SoftwareConfigurations.CreateSoftwareConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/software-configuration-records"),
        auth: this.#auth.awsSigV4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createSoftwareConfigurationRequestSchema },
      },
      {
        success: { kind: "json", schema: softwareConfigurationSchema },
        errorFactory: SoftwareConfigurations.CreateSoftwareConfigurationError,
      },
      options,
    );
  }

  /**
   * Delete Software Configuration
   *
   * @remarks
   * Deletes a FreeRTOS software configuration record.
   *
   * @returns Deleted
   *
   * @throws {@link SoftwareConfigurations.DeleteSoftwareConfigurationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonFreeRtosError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSoftwareConfiguration(
    request: SoftwareConfigurations.DeleteSoftwareConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SoftwareConfigurations.DeleteSoftwareConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/software-configuration-records/{configId}"),
        auth: this.#auth.awsSigV4,
        pathParams: [{ name: "configId", value: request.configId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SoftwareConfigurations.DeleteSoftwareConfigurationError,
      },
      options,
    );
  }

  /**
   * Describe Software Configuration
   *
   * @remarks
   * Gets a FreeRTOS software configuration record.
   *
   * @returns Success
   *
   * @throws {@link SoftwareConfigurations.DescribeSoftwareConfigurationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonFreeRtosError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeSoftwareConfiguration(
    request: SoftwareConfigurations.DescribeSoftwareConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<SoftwareConfiguration, SoftwareConfigurations.DescribeSoftwareConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/software-configuration-records/{configId}"),
        auth: this.#auth.awsSigV4,
        pathParams: [{ name: "configId", value: request.configId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: softwareConfigurationSchema },
        errorFactory: SoftwareConfigurations.DescribeSoftwareConfigurationError,
      },
      options,
    );
  }

  /**
   * List Software Configurations
   *
   * @remarks
   * Lists FreeRTOS software configuration records.
   *
   * @returns Success
   *
   * @throws {@link SoftwareConfigurations.ListSoftwareConfigurationsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonFreeRtosError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSoftwareConfigurations(
    request: SoftwareConfigurations.ListSoftwareConfigurationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    SoftwareConfigurationRecordsResponse,
    SoftwareConfigurations.ListSoftwareConfigurationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/software-configuration-records"),
        auth: this.#auth.awsSigV4,
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.optional(s.int()) },
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: softwareConfigurationRecordsResponseSchema },
        errorFactory: SoftwareConfigurations.ListSoftwareConfigurationsError,
      },
      options,
    );
  }

  /**
   * Update Software Configuration
   *
   * @remarks
   * Updates a FreeRTOS software configuration record.
   *
   * @returns Success
   *
   * @throws {@link SoftwareConfigurations.UpdateSoftwareConfigurationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonFreeRtosError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSoftwareConfiguration(
    request: SoftwareConfigurations.UpdateSoftwareConfigurationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SoftwareConfiguration, SoftwareConfigurations.UpdateSoftwareConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/software-configuration-records/{configId}"),
        auth: this.#auth.awsSigV4,
        pathParams: [{ name: "configId", value: request.configId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateSoftwareConfigurationRequestSchema },
      },
      {
        success: { kind: "json", schema: softwareConfigurationSchema },
        errorFactory: SoftwareConfigurations.UpdateSoftwareConfigurationError,
      },
      options,
    );
  }
}

export namespace SoftwareConfigurations {
  export type CreateSoftwareConfigurationRequestParams = {
    body: CreateSoftwareConfigurationRequest;
  };

  export class CreateSoftwareConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSoftwareConfigurationError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteSoftwareConfigurationRequest = {
    /** ID of the software configuration to delete. */
    configId: string;
  };

  export class DeleteSoftwareConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSoftwareConfigurationError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DescribeSoftwareConfigurationRequest = {
    /** ID of the software configuration. */
    configId: string;
  };

  export class DescribeSoftwareConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeSoftwareConfigurationError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListSoftwareConfigurationsRequest = {
    /** Maximum results to return. */
    maxResults?: number;
    /** Pagination token. */
    nextToken?: string;
  };

  export class ListSoftwareConfigurationsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSoftwareConfigurationsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateSoftwareConfigurationRequestParams = {
    /** ID of the software configuration to update. */
    configId: string;
    body: UpdateSoftwareConfigurationRequest;
  };

  export class UpdateSoftwareConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSoftwareConfigurationError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
