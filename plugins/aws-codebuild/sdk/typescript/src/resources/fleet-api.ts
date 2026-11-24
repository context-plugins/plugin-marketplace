import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsCodeBuildFleetApiSchema,
  type XAmzTargetAwsCodeBuildFleetApi,
} from "../models/xamz-target-aws-code-build-fleet-api.js";
import {
  xAmzTarget1AwsCodeBuildFleetApiSchema,
  type XAmzTarget1AwsCodeBuildFleetApi,
} from "../models/xamz-target1-aws-code-build-fleet-api.js";
import {
  xAmzTarget2AwsCodeBuildFleetApiSchema,
  type XAmzTarget2AwsCodeBuildFleetApi,
} from "../models/xamz-target2-aws-code-build-fleet-api.js";
import {
  xAmzTarget3AwsCodeBuildFleetApiSchema,
  type XAmzTarget3AwsCodeBuildFleetApi,
} from "../models/xamz-target3-aws-code-build-fleet-api.js";
import {
  xAmzTarget4AwsCodeBuildFleetApiSchema,
  type XAmzTarget4AwsCodeBuildFleetApi,
} from "../models/xamz-target4-aws-code-build-fleet-api.js";
import type { Servers } from "../servers.js";

export class FleetApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Batch Get Fleets
   *
   * @remarks
   * Gets information about one or more compute fleets.
   *
   * @returns Success
   *
   * @throws {@link FleetApi.BatchGetFleetsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchGetFleets(
    request: FleetApi.BatchGetFleetsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FleetApi.BatchGetFleetsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchGetFleets"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTargetAwsCodeBuildFleetApiSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FleetApi.BatchGetFleetsError,
      },
      options,
    );
  }

  /**
   * Create Fleet
   *
   * @remarks
   * Creates a compute fleet.
   *
   * @returns Success
   *
   * @throws {@link FleetApi.CreateFleetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createFleet(
    request: FleetApi.CreateFleetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FleetApi.CreateFleetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateFleet"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget1AwsCodeBuildFleetApiSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FleetApi.CreateFleetError,
      },
      options,
    );
  }

  /**
   * Delete Fleet
   *
   * @remarks
   * Deletes a compute fleet. When you delete a compute fleet, its builds are not deleted.
   *
   * @returns Success
   *
   * @throws {@link FleetApi.DeleteFleetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFleet(
    request: FleetApi.DeleteFleetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FleetApi.DeleteFleetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteFleet"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget2AwsCodeBuildFleetApiSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FleetApi.DeleteFleetError,
      },
      options,
    );
  }

  /**
   * List Fleets
   *
   * @remarks
   * Gets a list of compute fleet names with each compute fleet name representing a single compute
   * fleet.
   *
   * @returns Success
   *
   * @throws {@link FleetApi.ListFleetsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFleets(
    request: FleetApi.ListFleetsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FleetApi.ListFleetsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListFleets"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget3AwsCodeBuildFleetApiSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FleetApi.ListFleetsError,
      },
      options,
    );
  }

  /**
   * Update Fleet
   *
   * @remarks
   * Updates a compute fleet.
   *
   * @returns Success
   *
   * @throws {@link FleetApi.UpdateFleetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFleet(
    request: FleetApi.UpdateFleetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FleetApi.UpdateFleetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateFleet"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget4AwsCodeBuildFleetApiSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FleetApi.UpdateFleetError,
      },
      options,
    );
  }
}

export namespace FleetApi {
  export type BatchGetFleetsRequest = {
    xAmzTarget: XAmzTargetAwsCodeBuildFleetApi;
  };

  export class BatchGetFleetsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchGetFleetsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CreateFleetRequest = {
    xAmzTarget: XAmzTarget1AwsCodeBuildFleetApi;
  };

  export class CreateFleetError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateFleetError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteFleetRequest = {
    xAmzTarget: XAmzTarget2AwsCodeBuildFleetApi;
  };

  export class DeleteFleetError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFleetError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListFleetsRequest = {
    xAmzTarget: XAmzTarget3AwsCodeBuildFleetApi;
  };

  export class ListFleetsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListFleetsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateFleetRequest = {
    xAmzTarget: XAmzTarget4AwsCodeBuildFleetApi;
  };

  export class UpdateFleetError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateFleetError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
