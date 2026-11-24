import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonForecastServiceDatasetsApiSchema,
  type XAmzTargetAmazonForecastServiceDatasetsApi,
} from "../models/xamz-target-amazon-forecast-service-datasets-api.js";
import {
  xAmzTarget1AmazonForecastServiceDatasetsApiSchema,
  type XAmzTarget1AmazonForecastServiceDatasetsApi,
} from "../models/xamz-target1-amazon-forecast-service-datasets-api.js";
import {
  xAmzTarget2AmazonForecastServiceDatasetsApiSchema,
  type XAmzTarget2AmazonForecastServiceDatasetsApi,
} from "../models/xamz-target2-amazon-forecast-service-datasets-api.js";
import {
  xAmzTarget3AmazonForecastServiceDatasetsApiSchema,
  type XAmzTarget3AmazonForecastServiceDatasetsApi,
} from "../models/xamz-target3-amazon-forecast-service-datasets-api.js";
import type { Servers } from "../servers.js";

export class Datasets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Dataset
   *
   * @remarks
   * Creates an Amazon Forecast dataset. The information about the dataset that you provide helps
   * Forecast understand how to consume the data for model training. This includes the following:
   * DataFrequency - How frequently your historical time-series data is collected. Domain and
   * DatasetType - Each dataset has an associated dataset domain and a type within the domain.
   * Amazon Forecast provides a list of predefined domains and types within each domain. For each
   * unique dataset domain and type within the domain, Amazon Forecast requires your data to include
   * a minimum set of predefined fields. Schema - A schema specifies the fields in the dataset,
   * including the field name and data type. After creating a dataset, you import your training data
   * into it and add the dataset to a dataset group. You use the dataset group to create a
   * predictor. For more information, see Importing datasets. To get a list of all your datasets,
   * use the ListDatasets operation. For example Forecast datasets, see the Amazon Forecast Sample
   * GitHub repository. The Status of a dataset must be ACTIVE before you can import training data.
   * Use the DescribeDataset operation to get the status.
   *
   * @returns Success
   *
   * @throws {@link Datasets.CreateDatasetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDataset(
    request: Datasets.CreateDatasetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Datasets.CreateDatasetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateDataset"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonForecastServiceDatasetsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Datasets.CreateDatasetError,
      },
      options,
    );
  }

  /**
   * Delete Dataset
   *
   * @remarks
   * Deletes an Amazon Forecast dataset that was created using the CreateDataset operation. You can
   * only delete datasets that have a status of ACTIVE or CREATE_FAILED. To get the status use the
   * DescribeDataset operation. Forecast does not automatically update any dataset groups that
   * contain the deleted dataset. In order to update the dataset group, use the UpdateDatasetGroup
   * operation, omitting the deleted dataset's ARN.
   *
   * @returns Success
   *
   * @throws {@link Datasets.DeleteDatasetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDataset(
    request: Datasets.DeleteDatasetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Datasets.DeleteDatasetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteDataset"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonForecastServiceDatasetsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Datasets.DeleteDatasetError,
      },
      options,
    );
  }

  /**
   * Describe Dataset
   *
   * @remarks
   * Describes an Amazon Forecast dataset created using the CreateDataset operation. In addition to
   * listing the parameters specified in the CreateDataset request, this operation includes the
   * following dataset properties: CreationTime LastModificationTime Status
   *
   * @returns Success
   *
   * @throws {@link Datasets.DescribeDatasetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeDataset(
    request: Datasets.DescribeDatasetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Datasets.DescribeDatasetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeDataset"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonForecastServiceDatasetsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Datasets.DescribeDatasetError,
      },
      options,
    );
  }

  /**
   * List Datasets
   *
   * @remarks
   * Returns a list of datasets created using the CreateDataset operation. For each dataset, a
   * summary of its properties, including its Amazon Resource Name (ARN), is returned. To retrieve
   * the complete set of properties, use the ARN with the DescribeDataset operation.
   *
   * @returns Success
   *
   * @throws {@link Datasets.ListDatasetsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDatasets(
    request: Datasets.ListDatasetsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Datasets.ListDatasetsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListDatasets"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonForecastServiceDatasetsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Datasets.ListDatasetsError,
      },
      options,
    );
  }
}

export namespace Datasets {
  export type CreateDatasetRequestParams = {
    xAmzTarget: XAmzTargetAmazonForecastServiceDatasetsApi;
  };

  export class CreateDatasetError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error403", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDatasetError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type DeleteDatasetRequestParams = {
    xAmzTarget: XAmzTarget1AmazonForecastServiceDatasetsApi;
  };

  export class DeleteDatasetError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDatasetError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DescribeDatasetRequestParams = {
    xAmzTarget: XAmzTarget2AmazonForecastServiceDatasetsApi;
  };

  export class DescribeDatasetError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeDatasetError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListDatasetsRequestParams = {
    xAmzTarget: XAmzTarget3AmazonForecastServiceDatasetsApi;
  };

  export class ListDatasetsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListDatasetsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
