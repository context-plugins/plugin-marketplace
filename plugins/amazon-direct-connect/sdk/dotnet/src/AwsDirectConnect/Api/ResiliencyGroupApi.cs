using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AwsDirectConnect.Core;
using AwsDirectConnect.Core.Exceptions;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Core.Request;
using AwsDirectConnect.Core.Response;
using AwsDirectConnect.Errors;
using AwsDirectConnect.Requests.ResiliencyGroupApi;

namespace AwsDirectConnect.Api;

public sealed class ResiliencyGroupApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ResiliencyGroupApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Resiliency Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateResiliencyGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a resiliency group. A resiliency group lets you group Direct Connect connections together and manage them as a single unit to meet a target resiliency model.
    /// </remarks>
    public Task CreateResiliencyGroup(CreateResiliencyGroupOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateResiliencyGroup"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateResiliencyGroupError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Resiliency Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteResiliencyGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified resiliency group. Deletion is asynchronous: the resiliency group transitions through the deleting state before it reaches the deleted state. The response returns the resiliency group so you can observe its current state without a subsequent GetResiliencyGroup call.
    /// </remarks>
    public Task DeleteResiliencyGroup(DeleteResiliencyGroupOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteResiliencyGroup"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteResiliencyGroupError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Resiliency Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetResiliencyGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about the specified resiliency group.
    /// </remarks>
    public Task GetResiliencyGroup(GetResiliencyGroupOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#GetResiliencyGroup"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetResiliencyGroupError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Resiliency Groups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListResiliencyGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the resiliency groups owned by your Amazon Web Services account in the current Amazon Web Services Region.
    /// </remarks>
    public Task ListResiliencyGroups(ListResiliencyGroupsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListResiliencyGroups"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListResiliencyGroupsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Resiliency Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateResiliencyGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the name of the specified resiliency group.
    /// </remarks>
    public Task UpdateResiliencyGroup(UpdateResiliencyGroupOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateResiliencyGroup"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateResiliencyGroupError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
