import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { xAmzTargetSchema, type XAmzTarget } from "../models/xamz-target.js";
import { xAmzTarget1Schema, type XAmzTarget1 } from "../models/xamz-target1.js";
import { xAmzTarget2Schema, type XAmzTarget2 } from "../models/xamz-target2.js";
import { xAmzTarget3Schema, type XAmzTarget3 } from "../models/xamz-target3.js";
import { xAmzTarget4Schema, type XAmzTarget4 } from "../models/xamz-target4.js";
import type { Servers } from "../servers.js";

export class DatasetGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Dataset Group
   *
   * @remarks
   * Creates a dataset group, which holds a collection of related datasets. You can add datasets to
   * the dataset group when you create the dataset group, or later by using the UpdateDatasetGroup
   * operation. After creating a dataset group and adding datasets, you use the dataset group when
   * you create a predictor. For more information, see Dataset groups. To get a list of all your
   * datasets groups, use the ListDatasetGroups operation. The Status of a dataset group must be
   * ACTIVE before you can use the dataset group to create a predictor. To get the status, use the
   * DescribeDatasetGroup operation.
   *
   * @returns Success
   *
   * @throws {@link DatasetGroups.CreateDatasetGroupError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDatasetGroup(
    request: DatasetGroups.CreateDatasetGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, DatasetGroups.CreateDatasetGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateDatasetGroup"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTargetSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DatasetGroups.CreateDatasetGroupError,
      },
      options,
    );
  }

  /**
   * Delete Dataset Group
   *
   * @remarks
   * Deletes a dataset group created using the CreateDatasetGroup operation. You can only delete
   * dataset groups that have a status of ACTIVE, CREATE_FAILED, or UPDATE_FAILED. To get the
   * status, use the DescribeDatasetGroup operation. This operation deletes only the dataset group,
   * not the datasets in the group.
   *
   * @returns Success
   *
   * @throws {@link DatasetGroups.DeleteDatasetGroupError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDatasetGroup(
    request: DatasetGroups.DeleteDatasetGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, DatasetGroups.DeleteDatasetGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteDatasetGroup"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget1Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DatasetGroups.DeleteDatasetGroupError,
      },
      options,
    );
  }

  /**
   * Describe Dataset Group
   *
   * @remarks
   * Describes a dataset group created using the CreateDatasetGroup operation. In addition to
   * listing the parameters provided in the CreateDatasetGroup request, this operation includes the
   * following properties: DatasetArns - The datasets belonging to the group. CreationTime
   * LastModificationTime Status
   *
   * @returns Success
   *
   * @throws {@link DatasetGroups.DescribeDatasetGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeDatasetGroup(
    request: DatasetGroups.DescribeDatasetGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, DatasetGroups.DescribeDatasetGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeDatasetGroup"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget2Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DatasetGroups.DescribeDatasetGroupError,
      },
      options,
    );
  }

  /**
   * List Dataset Groups
   *
   * @remarks
   * Returns a list of dataset groups created using the CreateDatasetGroup operation. For each
   * dataset group, this operation returns a summary of its properties, including its Amazon
   * Resource Name (ARN). You can retrieve the complete set of properties by using the dataset group
   * ARN with the DescribeDatasetGroup operation.
   *
   * @returns Success
   *
   * @throws {@link DatasetGroups.ListDatasetGroupsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDatasetGroups(
    request: DatasetGroups.ListDatasetGroupsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, DatasetGroups.ListDatasetGroupsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListDatasetGroups"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget3Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DatasetGroups.ListDatasetGroupsError,
      },
      options,
    );
  }

  /**
   * Update Dataset Group
   *
   * @remarks
   * Replaces the datasets in a dataset group with the specified datasets. The Status of the dataset
   * group must be ACTIVE before you can use the dataset group to create a predictor. Use the
   * DescribeDatasetGroup operation to get the status.
   *
   * @returns Success
   *
   * @throws {@link DatasetGroups.UpdateDatasetGroupError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDatasetGroup(
    request: DatasetGroups.UpdateDatasetGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, DatasetGroups.UpdateDatasetGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateDatasetGroup"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget4Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DatasetGroups.UpdateDatasetGroupError,
      },
      options,
    );
  }
}

export namespace DatasetGroups {
  export type CreateDatasetGroupRequestParams = {
    xAmzTarget: XAmzTarget;
  };

  export class CreateDatasetGroupError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDatasetGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DeleteDatasetGroupRequestParams = {
    xAmzTarget: XAmzTarget1;
  };

  export class DeleteDatasetGroupError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDatasetGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DescribeDatasetGroupRequestParams = {
    xAmzTarget: XAmzTarget2;
  };

  export class DescribeDatasetGroupError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeDatasetGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListDatasetGroupsRequestParams = {
    xAmzTarget: XAmzTarget3;
  };

  export class ListDatasetGroupsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListDatasetGroupsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateDatasetGroupRequestParams = {
    xAmzTarget: XAmzTarget4;
  };

  export class UpdateDatasetGroupError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateDatasetGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
