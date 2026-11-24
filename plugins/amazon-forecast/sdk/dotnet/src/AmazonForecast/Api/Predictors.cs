using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonForecast.Core;
using AmazonForecast.Core.Exceptions;
using AmazonForecast.Core.Models;
using AmazonForecast.Core.Request;
using AmazonForecast.Core.Response;
using AmazonForecast.Errors;
using AmazonForecast.Requests.Predictors;

namespace AmazonForecast.Api;

public sealed class Predictors
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Predictors(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Predictor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePredictorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This operation creates a legacy predictor that does not include all the predictor functionalities provided by Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use CreateAutoPredictor. Creates an Amazon Forecast predictor. In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters. Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets in the specified dataset group. You can then generate a forecast using the CreateForecast operation. To see the evaluation metrics, use the GetAccuracyMetrics operation. You can specify a featurization configuration to fill and aggregate the data fields in the TARGET_TIME_SERIES dataset to improve model training. For more information, see FeaturizationConfig. For RELATED_TIME_SERIES datasets, CreatePredictor verifies that the DataFrequency specified when the dataset was created matches the ForecastFrequency. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and
    /// </remarks>
    public Task CreatePredictor(CreatePredictorOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreatePredictor"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreatePredictorError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Predictor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeletePredictorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a predictor created using the DescribePredictor or CreatePredictor operations. You can delete only predictor that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribePredictor operation.
    /// </remarks>
    public Task DeletePredictor(DeletePredictorOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeletePredictor"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeletePredictorError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Predictor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribePredictorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a legacy predictor, use DescribeAutoPredictor. Describes a predictor created using the CreatePredictor operation. In addition to listing the properties provided in the CreatePredictor request, this operation lists the following properties: DatasetImportJobArns - The dataset import jobs used to import training data. AutoMLAlgorithmArns - If AutoML is performed, the algorithms that were evaluated. CreationTime LastModificationTime Status Message - If an error occurred, information about the error.
    /// </remarks>
    public Task DescribePredictor(DescribePredictorOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribePredictor"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribePredictorError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Predictors
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPredictorsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of predictors created using the CreateAutoPredictor or CreatePredictor operations. For each predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the DescribeAutoPredictor and DescribePredictor operations. You can filter the list using an array of Filter objects.
    /// </remarks>
    public Task ListPredictors(ListPredictorsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListPredictors"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListPredictorsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
