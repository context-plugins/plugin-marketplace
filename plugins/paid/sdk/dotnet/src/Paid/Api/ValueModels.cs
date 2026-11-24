using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Paid.Core;
using Paid.Core.Authentication;
using Paid.Core.Exceptions;
using Paid.Core.Models;
using Paid.Core.Request;
using Paid.Core.Response;
using Paid.Errors;
using Paid.Models;
using Paid.Requests.ValueModels;

namespace Paid.Api;

public sealed class ValueModels
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal ValueModels(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get current value model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ValueModelDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCurrentValueModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the current (latest active) value model for the organization.
    /// </remarks>
    public Task<ValueModelDetail> GetCurrentValueModel(GetCurrentValueModelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/value-models/"),
            [],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ValueModelDetail>(),
            GetCurrentValueModelError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get specific version
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ValueModelDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetValueModelVersionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a specific historical value model version by version number, including full content.
    /// </remarks>
    public Task<ValueModelDetail> GetValueModelVersion(GetValueModelVersionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/value-models/versions/{version}"),
            [new TemplateParam("version", request.Version)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ValueModelDetail>(),
            GetValueModelVersionError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List version history
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ValueModelVersionListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListValueModelVersionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all value model versions sorted by version descending. Does not include the full content.
    /// </remarks>
    public Task<ValueModelVersionListResponse> ListValueModelVersions(ListValueModelVersionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/value-models/versions"),
            [],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ValueModelVersionListResponse>(),
            ListValueModelVersionsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger backfill
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BackfillResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RefreshValueModelBackfillError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Manually triggers a recalculation of all ClickHouse rows against the current value model.
    /// </remarks>
    public Task<BackfillResponse> RefreshValueModelBackfill(RefreshValueModelBackfillRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/value-models/backfill"),
            [],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BackfillResponse>(),
            RefreshValueModelBackfillError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload value model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ValueModelDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateValueModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Uploads a new value model version. Validates the content, creates a new version, archives the previous active version, syncs to ClickHouse, and triggers a backfill of all historical signals.
    /// </remarks>
    public Task<ValueModelDetail> UpdateValueModel(UpdateValueModelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/value-models/"),
            [],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ValueModelDetail>(),
            UpdateValueModelError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
