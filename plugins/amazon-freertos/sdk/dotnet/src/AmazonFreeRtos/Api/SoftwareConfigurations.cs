using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonFreeRtos.Core;
using AmazonFreeRtos.Core.Exceptions;
using AmazonFreeRtos.Core.Models;
using AmazonFreeRtos.Core.Request;
using AmazonFreeRtos.Core.Response;
using AmazonFreeRtos.Errors;
using AmazonFreeRtos.Models;
using AmazonFreeRtos.Requests.SoftwareConfigurations;

namespace AmazonFreeRtos.Api;

/// <summary>
/// FreeRTOS software configuration management
/// </summary>
public sealed class SoftwareConfigurations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SoftwareConfigurations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Software Configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SoftwareConfiguration"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSoftwareConfigurationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a FreeRTOS software configuration record specifying the libraries and settings for a target hardware platform.
    /// </remarks>
    public Task<SoftwareConfiguration> CreateSoftwareConfiguration(CreateSoftwareConfigurationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/software-configuration-records"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SoftwareConfiguration>(),
            CreateSoftwareConfigurationError.Response,
            _auth.AwsSigV4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Software Configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSoftwareConfigurationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a FreeRTOS software configuration record.
    /// </remarks>
    public Task DeleteSoftwareConfiguration(DeleteSoftwareConfigurationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/software-configuration-records/{configId}"),
            [new TemplateParam("configId", request.ConfigId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteSoftwareConfigurationError.Response,
            _auth.AwsSigV4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Software Configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SoftwareConfiguration"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeSoftwareConfigurationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a FreeRTOS software configuration record.
    /// </remarks>
    public Task<SoftwareConfiguration> DescribeSoftwareConfiguration(DescribeSoftwareConfigurationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/software-configuration-records/{configId}"),
            [new TemplateParam("configId", request.ConfigId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SoftwareConfiguration>(),
            DescribeSoftwareConfigurationError.Response,
            _auth.AwsSigV4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Software Configurations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SoftwareConfigurationRecordsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSoftwareConfigurationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists FreeRTOS software configuration records.
    /// </remarks>
    public Task<SoftwareConfigurationRecordsResponse> ListSoftwareConfigurations(ListSoftwareConfigurationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/software-configuration-records"),
            [],
            [new Param("maxResults", request.MaxResults), new Param("nextToken", request.NextToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SoftwareConfigurationRecordsResponse>(),
            ListSoftwareConfigurationsError.Response,
            _auth.AwsSigV4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Software Configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SoftwareConfiguration"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSoftwareConfigurationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a FreeRTOS software configuration record.
    /// </remarks>
    public Task<SoftwareConfiguration> UpdateSoftwareConfiguration(UpdateSoftwareConfigurationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/software-configuration-records/{configId}"),
            [new TemplateParam("configId", request.ConfigId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SoftwareConfiguration>(),
            UpdateSoftwareConfigurationError.Response,
            _auth.AwsSigV4,
            requestOptions,
            cancellationToken);
}
