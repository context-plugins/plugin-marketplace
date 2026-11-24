import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonForecastServiceOperationsApiSchema,
  type XAmzTargetAmazonForecastServiceOperationsApi,
} from "../models/xamz-target-amazon-forecast-service-operations-api.js";
import {
  xAmzTarget1AmazonForecastServiceOperationsApiSchema,
  type XAmzTarget1AmazonForecastServiceOperationsApi,
} from "../models/xamz-target1-amazon-forecast-service-operations-api.js";
import {
  xAmzTarget2AmazonForecastServiceOperationsApiSchema,
  type XAmzTarget2AmazonForecastServiceOperationsApi,
} from "../models/xamz-target2-amazon-forecast-service-operations-api.js";
import {
  xAmzTarget3AmazonForecastServiceOperationsApiSchema,
  type XAmzTarget3AmazonForecastServiceOperationsApi,
} from "../models/xamz-target3-amazon-forecast-service-operations-api.js";
import {
  xAmzTarget4AmazonForecastServiceOperationsApiSchema,
  type XAmzTarget4AmazonForecastServiceOperationsApi,
} from "../models/xamz-target4-amazon-forecast-service-operations-api.js";
import { xAmzTarget5Schema, type XAmzTarget5 } from "../models/xamz-target5.js";
import { xAmzTarget6Schema, type XAmzTarget6 } from "../models/xamz-target6.js";
import type { Servers } from "../servers.js";

export class Operations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Auto Predictor
   *
   * @remarks
   * Creates an Amazon Forecast predictor. Amazon Forecast creates predictors with AutoPredictor,
   * which involves applying the optimal combination of algorithms to each time series in your
   * datasets. You can use CreateAutoPredictor to create new predictors or upgrade/retrain existing
   * predictors. Creating new predictors The following parameters are required when creating a new
   * predictor: PredictorName - A unique name for the predictor. DatasetGroupArn - The ARN of the
   * dataset group used to train the predictor. ForecastFrequency - The granularity of your
   * forecasts (hourly, daily, weekly, etc). ForecastHorizon - The number of time-steps that the
   * model predicts. The forecast horizon is also called the prediction length. When creating a new
   * predictor, do not specify a value for ReferencePredictorArn. Upgrading and retraining
   * predictors The following parameters are required when retraining or upgrading a predictor:
   * PredictorName - A unique name for the predictor. ReferencePredictorArn - The ARN of the
   * predictor to retrain or upgrade. When upgrading or retraining a predictor, only specify values
   * for the ReferencePredictorArn and PredictorName.
   *
   * @returns Success
   *
   * @throws {@link Operations.CreateAutoPredictorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAutoPredictor(
    request: Operations.CreateAutoPredictorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.CreateAutoPredictorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateAutoPredictor"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonForecastServiceOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.CreateAutoPredictorError,
      },
      options,
    );
  }

  /**
   * Delete Resource Tree
   *
   * @remarks
   * Deletes an entire resource tree. This operation will delete the parent resource and its child
   * resources. Child resources are resources that were created from another resource. For example,
   * when a forecast is generated from a predictor, the forecast is the child resource and the
   * predictor is the parent resource. Amazon Forecast resources possess the following parent-child
   * resource hierarchies: Dataset: dataset import jobs Dataset Group: predictors, predictor
   * backtest export jobs, forecasts, forecast export jobs Predictor: predictor backtest export
   * jobs, forecasts, forecast export jobs Forecast: forecast export jobs DeleteResourceTree will
   * only delete Amazon Forecast resources, and will not delete datasets or exported files stored in
   * Amazon S3.
   *
   * @returns Success
   *
   * @throws {@link Operations.DeleteResourceTreeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteResourceTree(
    request: Operations.DeleteResourceTreeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DeleteResourceTreeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteResourceTree"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonForecastServiceOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DeleteResourceTreeError,
      },
      options,
    );
  }

  /**
   * Describe Auto Predictor
   *
   * @remarks
   * Describes a predictor created using the CreateAutoPredictor operation.
   *
   * @returns Success
   *
   * @throws {@link Operations.DescribeAutoPredictorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeAutoPredictor(
    request: Operations.DescribeAutoPredictorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DescribeAutoPredictorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeAutoPredictor"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonForecastServiceOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DescribeAutoPredictorError,
      },
      options,
    );
  }

  /**
   * Get Accuracy Metrics
   *
   * @remarks
   * Provides metrics on the accuracy of the models that were trained by the CreatePredictor
   * operation. Use metrics to see how well the model performed and to decide whether to use the
   * predictor to generate a forecast. For more information, see Predictor Metrics. This operation
   * generates metrics for each backtest window that was evaluated. The number of backtest windows
   * (NumberOfBacktestWindows) is specified using the EvaluationParameters object, which is
   * optionally included in the CreatePredictor request. If NumberOfBacktestWindows isn't specified,
   * the number defaults to one. The parameters of the filling method determine which items
   * contribute to the metrics. If you want all items to contribute, specify zero. If you want only
   * those items that have complete data in the range being evaluated to contribute, specify nan.
   * For more information, see FeaturizationMethod. Before you can get accuracy metrics, the Status
   * of the predictor must be ACTIVE, signifying that training has completed. To get the status, use
   * the DescribePredictor operation.
   *
   * @returns Success
   *
   * @throws {@link Operations.GetAccuracyMetricsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccuracyMetrics(
    request: Operations.GetAccuracyMetricsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.GetAccuracyMetricsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetAccuracyMetrics"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AmazonForecastServiceOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.GetAccuracyMetricsError,
      },
      options,
    );
  }

  /**
   * List Monitor Evaluations
   *
   * @remarks
   * Returns a list of the monitoring evaluation results and predictor events collected by the
   * monitor resource during different windows of time. For information about monitoring see
   * predictor-monitoring. For more information about retrieving monitoring results see Viewing
   * Monitoring Results.
   *
   * @returns Success
   *
   * @throws {@link Operations.ListMonitorEvaluationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMonitorEvaluations(
    request: Operations.ListMonitorEvaluationsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ListMonitorEvaluationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListMonitorEvaluations"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget5Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ListMonitorEvaluationsError,
      },
      options,
    );
  }

  /**
   * List What If Analyses
   *
   * @remarks
   * Returns a list of what-if analyses created using the CreateWhatIfAnalysis operation. For each
   * what-if analysis, this operation returns a summary of its properties, including its Amazon
   * Resource Name (ARN). You can retrieve the complete set of properties by using the what-if
   * analysis ARN with the DescribeWhatIfAnalysis operation.
   *
   * @returns Success
   *
   * @throws {@link Operations.ListWhatIfAnalysesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWhatIfAnalyses(
    request: Operations.ListWhatIfAnalysesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ListWhatIfAnalysesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListWhatIfAnalyses"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget6Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ListWhatIfAnalysesError,
      },
      options,
    );
  }

  /**
   * Resume Resource
   *
   * @remarks
   * Resumes a stopped monitor resource.
   *
   * @returns Success
   *
   * @throws {@link Operations.ResumeResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resumeResource(
    request: Operations.ResumeResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ResumeResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ResumeResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonForecastServiceOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ResumeResourceError,
      },
      options,
    );
  }
}

export namespace Operations {
  export type CreateAutoPredictorRequestParams = {
    xAmzTarget: XAmzTarget1AmazonForecastServiceOperationsApi;
  };

  export class CreateAutoPredictorError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAutoPredictorError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DeleteResourceTreeRequestParams = {
    xAmzTarget: XAmzTarget3AmazonForecastServiceOperationsApi;
  };

  export class DeleteResourceTreeError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteResourceTreeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DescribeAutoPredictorRequestParams = {
    xAmzTarget: XAmzTarget2AmazonForecastServiceOperationsApi;
  };

  export class DescribeAutoPredictorError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeAutoPredictorError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetAccuracyMetricsRequestParams = {
    xAmzTarget: XAmzTarget4AmazonForecastServiceOperationsApi;
  };

  export class GetAccuracyMetricsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAccuracyMetricsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListMonitorEvaluationsRequestParams = {
    xAmzTarget: XAmzTarget5;
  };

  export class ListMonitorEvaluationsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListMonitorEvaluationsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListWhatIfAnalysesRequestParams = {
    xAmzTarget: XAmzTarget6;
  };

  export class ListWhatIfAnalysesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListWhatIfAnalysesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ResumeResourceRequestParams = {
    xAmzTarget: XAmzTargetAmazonForecastServiceOperationsApi;
  };

  export class ResumeResourceError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResumeResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
