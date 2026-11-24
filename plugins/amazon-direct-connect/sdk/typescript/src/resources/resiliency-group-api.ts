import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsDirectConnectResiliencyGroupApiSchema,
  type XAmzTargetAwsDirectConnectResiliencyGroupApi,
} from "../models/xamz-target-aws-direct-connect-resiliency-group-api.js";
import {
  xAmzTarget1AwsDirectConnectResiliencyGroupApiSchema,
  type XAmzTarget1AwsDirectConnectResiliencyGroupApi,
} from "../models/xamz-target1-aws-direct-connect-resiliency-group-api.js";
import {
  xAmzTarget2AwsDirectConnectResiliencyGroupApiSchema,
  type XAmzTarget2AwsDirectConnectResiliencyGroupApi,
} from "../models/xamz-target2-aws-direct-connect-resiliency-group-api.js";
import {
  xAmzTarget3AwsDirectConnectResiliencyGroupApiSchema,
  type XAmzTarget3AwsDirectConnectResiliencyGroupApi,
} from "../models/xamz-target3-aws-direct-connect-resiliency-group-api.js";
import {
  xAmzTarget4AwsDirectConnectResiliencyGroupApiSchema,
  type XAmzTarget4AwsDirectConnectResiliencyGroupApi,
} from "../models/xamz-target4-aws-direct-connect-resiliency-group-api.js";
import type { Servers } from "../servers.js";

export class ResiliencyGroupApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Resiliency Group
   *
   * @remarks
   * Creates a resiliency group. A resiliency group lets you group Direct Connect connections
   * together and manage them as a single unit to meet a target resiliency model.
   *
   * @returns Success
   *
   * @throws {@link ResiliencyGroupApi.CreateResiliencyGroupError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createResiliencyGroup(
    request: ResiliencyGroupApi.CreateResiliencyGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResiliencyGroupApi.CreateResiliencyGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateResiliencyGroup"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsDirectConnectResiliencyGroupApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResiliencyGroupApi.CreateResiliencyGroupError,
      },
      options,
    );
  }

  /**
   * Delete Resiliency Group
   *
   * @remarks
   * Deletes the specified resiliency group. Deletion is asynchronous: the resiliency group
   * transitions through the deleting state before it reaches the deleted state. The response
   * returns the resiliency group so you can observe its current state without a subsequent
   * GetResiliencyGroup call.
   *
   * @returns Success
   *
   * @throws {@link ResiliencyGroupApi.DeleteResiliencyGroupError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteResiliencyGroup(
    request: ResiliencyGroupApi.DeleteResiliencyGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResiliencyGroupApi.DeleteResiliencyGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteResiliencyGroup"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsDirectConnectResiliencyGroupApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResiliencyGroupApi.DeleteResiliencyGroupError,
      },
      options,
    );
  }

  /**
   * Get Resiliency Group
   *
   * @remarks
   * Gets information about the specified resiliency group.
   *
   * @returns Success
   *
   * @throws {@link ResiliencyGroupApi.GetResiliencyGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getResiliencyGroup(
    request: ResiliencyGroupApi.GetResiliencyGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResiliencyGroupApi.GetResiliencyGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetResiliencyGroup"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AwsDirectConnectResiliencyGroupApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResiliencyGroupApi.GetResiliencyGroupError,
      },
      options,
    );
  }

  /**
   * List Resiliency Groups
   *
   * @remarks
   * Lists the resiliency groups owned by your Amazon Web Services account in the current Amazon Web
   * Services Region.
   *
   * @returns Success
   *
   * @throws {@link ResiliencyGroupApi.ListResiliencyGroupsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listResiliencyGroups(
    request: ResiliencyGroupApi.ListResiliencyGroupsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResiliencyGroupApi.ListResiliencyGroupsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListResiliencyGroups"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AwsDirectConnectResiliencyGroupApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResiliencyGroupApi.ListResiliencyGroupsError,
      },
      options,
    );
  }

  /**
   * Update Resiliency Group
   *
   * @remarks
   * Updates the name of the specified resiliency group.
   *
   * @returns Success
   *
   * @throws {@link ResiliencyGroupApi.UpdateResiliencyGroupError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateResiliencyGroup(
    request: ResiliencyGroupApi.UpdateResiliencyGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResiliencyGroupApi.UpdateResiliencyGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateResiliencyGroup"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AwsDirectConnectResiliencyGroupApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResiliencyGroupApi.UpdateResiliencyGroupError,
      },
      options,
    );
  }
}

export namespace ResiliencyGroupApi {
  export type CreateResiliencyGroupRequestParams = {
    xAmzTarget: XAmzTargetAwsDirectConnectResiliencyGroupApi;
  };

  export class CreateResiliencyGroupError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateResiliencyGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteResiliencyGroupRequestParams = {
    xAmzTarget: XAmzTarget1AwsDirectConnectResiliencyGroupApi;
  };

  export class DeleteResiliencyGroupError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteResiliencyGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetResiliencyGroupRequestParams = {
    xAmzTarget: XAmzTarget2AwsDirectConnectResiliencyGroupApi;
  };

  export class GetResiliencyGroupError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetResiliencyGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ListResiliencyGroupsRequestParams = {
    xAmzTarget: XAmzTarget3AwsDirectConnectResiliencyGroupApi;
  };

  export class ListResiliencyGroupsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListResiliencyGroupsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UpdateResiliencyGroupRequestParams = {
    xAmzTarget: XAmzTarget4AwsDirectConnectResiliencyGroupApi;
  };

  export class UpdateResiliencyGroupError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateResiliencyGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
