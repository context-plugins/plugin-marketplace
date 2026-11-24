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
using AmazonFreeRtos.Requests.OtaUpdates;

namespace AmazonFreeRtos.Api;

/// <summary>
/// Over-the-air firmware update management
/// </summary>
public sealed class OtaUpdates
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal OtaUpdates(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create OTA Update
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OtaUpdate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateOtaUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an AWS IoT OTA update on a target group of devices.
    /// </remarks>
    public Task<OtaUpdate> CreateOtaUpdate(CreateOtaUpdateOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/otaUpdates"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OtaUpdate>(),
            CreateOtaUpdateError.Response,
            _auth.AwsSigV4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete OTA Update
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteOtaUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an OTA update.
    /// </remarks>
    public Task DeleteOtaUpdate(DeleteOtaUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/otaUpdates/{otaUpdateId}"),
            [new TemplateParam("otaUpdateId", request.OtaUpdateId)],
            [
                new Param("deleteStream", request.DeleteStream),
                new Param("forceDeleteAWSJob", request.ForceDeleteAwsJob),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteOtaUpdateError.Response,
            _auth.AwsSigV4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get OTA Update
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OtaUpdateInfo"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOtaUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets an OTA update.
    /// </remarks>
    public Task<OtaUpdateInfo> GetOtaUpdate(GetOtaUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/otaUpdates/{otaUpdateId}"),
            [new TemplateParam("otaUpdateId", request.OtaUpdateId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OtaUpdateInfo>(),
            GetOtaUpdateError.Response,
            _auth.AwsSigV4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List OTA Updates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OtaUpdatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListOtaUpdatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists OTA updates.
    /// </remarks>
    public Task<OtaUpdatesResponse> ListOtaUpdates(ListOtaUpdatesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/otaUpdates"),
            [],
            [
                new Param("maxResults", request.MaxResults),
                new Param("nextToken", request.NextToken),
                new Param("otaUpdateStatus", request.OtaUpdateStatus),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OtaUpdatesResponse>(),
            ListOtaUpdatesError.Response,
            _auth.AwsSigV4,
            requestOptions,
            cancellationToken);
}
