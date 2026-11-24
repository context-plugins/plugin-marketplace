using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Insights;

namespace DoiT.Api;

/// <summary>
/// Manage cloud insights representing recommendations and findings for cloud resources.
/// </summary>
public sealed class Insights
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Insights(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete an insight
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteInsightResultError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a single insight and all its associated resource results.
    /// Only insights created via the public API can be deleted.
    /// </remarks>
    public Task DeleteInsightResult(DeleteInsightResultRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights/v1/results/source/{sourceID}/insight/{insightKey}"),
            [new TemplateParam("sourceID", request.SourceId), new TemplateParam("insightKey", request.InsightKey)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteInsightResultError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete insights (batch)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteInsightResultsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes all insights matching the specified key from the batch source.
    /// This removes the insight and all its associated resource results.
    /// For single-insight deletion, use <c>DELETE /source/{sourceID}/insight/{insightKey}</c> instead.
    /// </remarks>
    public Task DeleteInsightResults(DeleteInsightResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights/v1/results"),
            [],
            [new Param("insightKey", request.InsightKey)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteInsightResultsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List resource results for an insight
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResourceResultsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInsightResourceResultsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of individual resource-level results for a specific insight.
    /// Each resource result represents a single cloud resource (e.g. an EC2 instance, a GCS bucket)
    /// affected by the insight, along with its risk scores or potential savings.
    /// </remarks>
    public Task<ResourceResultsResponse> GetInsightResourceResults(GetInsightResourceResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights/v1/results/source/{sourceID}/insight/{insightKey}/resource-results"),
            [new TemplateParam("sourceID", request.SourceId), new TemplateParam("insightKey", request.InsightKey)],
            [new Param("pageToken", request.PageToken), new Param("maxResults", request.MaxResults)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ResourceResultsResponse>(),
            GetInsightResourceResultsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve an insight
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InsightResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInsightResultError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the metadata and aggregate summary for a single insight identified by source and key.
    /// Does not include individual resource-level results — use the resource-results endpoint for those.
    /// </remarks>
    public Task<InsightResponse> GetInsightResult(GetInsightResultRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights/v1/results/source/{sourceID}/insight/{insightKey}"),
            [new TemplateParam("sourceID", request.SourceId), new TemplateParam("insightKey", request.InsightKey)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InsightResponse>(),
            GetInsightResultError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResultsBody"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInsightResultsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of insights with their aggregate summaries (savings, risk counts).
    /// Use query parameters to filter by status, category, provider, or priority.
    /// Does not include individual resource-level results — use the resource-results endpoint for those.
    /// </remarks>
    public Task<ResultsBody> GetInsightResults(GetInsightResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights/v1/results"),
            [],
            [
                new Param("searchTerm", request.SearchTerm),
                new Param("displayStatus", request.DisplayStatus),
                new Param("category", request.Category),
                new Param("cloudProvider", request.CloudProvider),
                new Param("source", request.Source),
                new Param("priority", request.Priority),
                new Param("tag", request.Tag),
                new Param("easyWin", request.EasyWin),
                new Param("cloudFlows", request.CloudFlows),
                new Param("pageToken", request.PageToken),
                new Param("maxResults", request.MaxResults),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ResultsBody>(),
            GetInsightResultsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace resource results for an insight
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResourceResultsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostInsightResourceResultsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Replaces all resource results for the specified insight. Any existing unresolved resource results not present in the new set will be removed. The response includes server-computed fields (severity, resolved, enhancement) for each resource result. To delete all resource results, send an empty array.
    /// </remarks>
    public Task<ResourceResultsResponse> PostInsightResourceResults(PostInsightResourceResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights/v1/results/source/{sourceID}/insight/{insightKey}/resource-results"),
            [new TemplateParam("sourceID", request.SourceId), new TemplateParam("insightKey", request.InsightKey)],
            [new Param("maxResults", request.MaxResults)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ResourceResultsResponse>(),
            PostInsightResourceResultsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create or update an insight
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InsightResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostInsightResultError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates or updates a single insight for the given source and key.
    /// If an insight with the same key already exists for the source, it will be updated.
    /// Resource results are managed separately via the resource-results endpoint.
    /// </remarks>
    public Task<InsightResponse> PostInsightResult(PostInsightResultRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights/v1/results/source/{sourceID}/insight/{insightKey}"),
            [new TemplateParam("sourceID", request.SourceId), new TemplateParam("insightKey", request.InsightKey)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<InsightResponse>(),
            PostInsightResultError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create insights (batch)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ResultsError"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostInsightResultsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates or updates multiple insights in a single batch request.
    /// Each insight in the batch includes its metadata and resource results inline.
    /// For granular control over insight metadata and resource results independently,
    /// use the single-insight and resource-results endpoints instead.
    /// </remarks>
    public Task<IReadOnlyList<ResultsError>> PostInsightResults(PostInsightResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights/v1/results"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<ResultsError>>(),
            PostInsightResultsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Insight Status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateInsightStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the display status (e.g. actionable, acknowledged, dismissed) of a single insight.
    /// Only insights created via the public API can have their status changed.
    /// Deprecated: use the status field on the create/update insight endpoint instead.
    /// </remarks>
    public Task UpdateInsightStatus(UpdateInsightStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/insights/v1/results/source/{sourceID}/insight/{insightKey}/status"),
            [new TemplateParam("sourceID", request.SourceId), new TemplateParam("insightKey", request.InsightKey)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            UpdateInsightStatusError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
