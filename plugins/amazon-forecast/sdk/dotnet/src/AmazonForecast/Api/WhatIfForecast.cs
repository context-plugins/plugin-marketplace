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
using AmazonForecast.Requests.WhatIfForecast;

namespace AmazonForecast.Api;

public sealed class WhatIfForecast
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal WhatIfForecast(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create What If Forecast
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateWhatIfForecastError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset.
    /// </remarks>
    public Task CreateWhatIfForecast(CreateWhatIfForecastOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateWhatIfForecast"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateWhatIfForecastError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete What If Forecast
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWhatIfForecastError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a what-if forecast created using the CreateWhatIfForecast operation. You can delete only what-if forecasts that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfForecast operation. You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.
    /// </remarks>
    public Task DeleteWhatIfForecast(DeleteWhatIfForecastOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteWhatIfForecast"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteWhatIfForecastError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe What If Forecast
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeWhatIfForecastError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Describes the what-if forecast created using the CreateWhatIfForecast operation. In addition to listing the properties provided in the CreateWhatIfForecast request, this operation lists the following properties: CreationTime LastModificationTime Message - If an error occurred, information about the error. Status
    /// </remarks>
    public Task DescribeWhatIfForecast(DescribeWhatIfForecastOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeWhatIfForecast"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeWhatIfForecastError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List What If Forecasts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWhatIfForecastsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of what-if forecasts created using the CreateWhatIfForecast operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the DescribeWhatIfForecast operation.
    /// </remarks>
    public Task ListWhatIfForecasts(ListWhatIfForecastsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListWhatIfForecasts"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListWhatIfForecastsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
