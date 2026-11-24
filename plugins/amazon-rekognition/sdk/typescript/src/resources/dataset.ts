import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionDatasetApiSchema,
  type XAmzTargetAmazonRekognitionDatasetApi,
} from "../models/xamz-target-amazon-rekognition-dataset-api.js";
import {
  xAmzTarget1AmazonRekognitionDatasetApiSchema,
  type XAmzTarget1AmazonRekognitionDatasetApi,
} from "../models/xamz-target1-amazon-rekognition-dataset-api.js";
import {
  xAmzTarget2AmazonRekognitionDatasetApiSchema,
  type XAmzTarget2AmazonRekognitionDatasetApi,
} from "../models/xamz-target2-amazon-rekognition-dataset-api.js";
import type { Servers } from "../servers.js";

export class Dataset {
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
   * This operation applies only to Amazon Rekognition Custom Labels. Creates a new Amazon
   * Rekognition Custom Labels dataset. You can create a dataset by using an Amazon Sagemaker format
   * manifest file or by copying an existing Amazon Rekognition Custom Labels dataset. To create a
   * training dataset for a project, specify TRAIN for the value of DatasetType. To create the test
   * dataset for a project, specify TEST for the value of DatasetType. The response from
   * CreateDataset is the Amazon Resource Name (ARN) for the dataset. Creating a dataset takes a
   * while to complete. Use DescribeDataset to check the current status. The dataset created
   * successfully if the value of Status is CREATE_COMPLETE. To check if any non-terminal errors
   * occurred, call ListDatasetEntries and check for the presence of errors lists in the JSON Lines.
   * Dataset creation fails if a terminal error occurs (Status = CREATE_FAILED). Currently, you
   * can't access the terminal error information. For more information, see Creating dataset in the
   * Amazon Rekognition Custom Labels Developer Guide. This operation requires permissions to
   * perform the rekognition:CreateDataset action. If you want to copy an existing dataset, you also
   * requir
   *
   * @returns Success
   *
   * @throws {@link Dataset.CreateDatasetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createDataset(
    request: Dataset.CreateDatasetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Dataset.CreateDatasetError> {
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
            schema: xAmzTargetAmazonRekognitionDatasetApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Dataset.CreateDatasetError,
      },
      options,
    );
  }

  /**
   * Delete Dataset
   *
   * @remarks
   * This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing Amazon
   * Rekognition Custom Labels dataset. Deleting a dataset might take while. Use DescribeDataset to
   * check the current status. The dataset is still deleting if the value of Status is
   * DELETE_IN_PROGRESS. If you try to access the dataset after it is deleted, you get a
   * ResourceNotFoundException exception. You can't delete a dataset while it is creating (Status =
   * CREATE_IN_PROGRESS) or if the dataset is updating (Status = UPDATE_IN_PROGRESS). This operation
   * requires permissions to perform the rekognition:DeleteDataset action.
   *
   * @returns Success
   *
   * @throws {@link Dataset.DeleteDatasetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteDataset(
    request: Dataset.DeleteDatasetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Dataset.DeleteDatasetError> {
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
            schema: xAmzTarget1AmazonRekognitionDatasetApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Dataset.DeleteDatasetError,
      },
      options,
    );
  }

  /**
   * Describe Dataset
   *
   * @remarks
   * This operation applies only to Amazon Rekognition Custom Labels. Describes an Amazon
   * Rekognition Custom Labels dataset. You can get information such as the current status of a
   * dataset and statistics about the images and labels in a dataset. This operation requires
   * permissions to perform the rekognition:DescribeDataset action.
   *
   * @returns Success
   *
   * @throws {@link Dataset.DescribeDatasetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeDataset(
    request: Dataset.DescribeDatasetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Dataset.DescribeDatasetError> {
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
            schema: xAmzTarget2AmazonRekognitionDatasetApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Dataset.DescribeDatasetError,
      },
      options,
    );
  }
}

export namespace Dataset {
  export type CreateDatasetRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionDatasetApi;
  };

  export class CreateDatasetError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateDatasetError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteDatasetRequestParams = {
    xAmzTarget: XAmzTarget1AmazonRekognitionDatasetApi;
  };

  export class DeleteDatasetError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDatasetError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeDatasetRequestParams = {
    xAmzTarget: XAmzTarget2AmazonRekognitionDatasetApi;
  };

  export class DescribeDatasetError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeDatasetError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
