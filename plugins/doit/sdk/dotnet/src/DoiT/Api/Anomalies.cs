using System;
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
using DoiT.Requests.Anomalies;

namespace DoiT.Api;

/// <summary>
/// Monitor cost spikes in your cloud environment.
/// </summary>
public sealed class Anomalies
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Anomalies(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve an anomaly
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnomaliesV1Response"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAnomalyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified anomaly.
    /// </remarks>
    public Task<AnomaliesV1Response> GetAnomaly(GetAnomalyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/anomalies/v1/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnomaliesV1Response>(),
            GetAnomalyError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Explain an anomaly
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnomaliesV1ExplanationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAnomalyExplanationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a likely-cause explanation for the specified anomaly, alongside the deterministic facts and evidence references it was generated from. The explanation itself is AI-generated; it is always returned separately from the deterministic <c>facts</c>, and is marked as such in the <c>explanation</c> object. Generation is ephemeral: no conversation is persisted on your behalf.
    /// </remarks>
    public Task<AnomaliesV1ExplanationResponse> GetAnomalyExplanation(GetAnomalyExplanationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/anomalies/v1/{id}/explanation"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnomaliesV1ExplanationResponse>(),
            GetAnomalyExplanationError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List anomalies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnomaliesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAnomaliesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of detected anomalies.
    /// Anomalies can be sorted by <c>startTime</c>, <c>severityLevel</c>, or <c>costOfAnomaly</c> using <c>sortBy</c> and <c>sortOrder</c>. By default they are sorted by <c>startTime</c> in descending order (most recent first).
    /// The sort order is total and reproducible: ties on the selected field are broken by <c>startTime</c> descending and then by anomaly <c>id</c> ascending, so the same result set always paginates in the same order.
    /// The <c>notifications</c> array is always present on each anomaly item; it is empty unless <c>includeNotifications=true</c> is supplied.
    /// <b>Pagination stability</b>: <c>sortBy</c>, <c>sortOrder</c>, <c>filter</c>, <c>minCreationTime</c>, and <c>maxCreationTime</c> must be held constant across a pagination sequence. A <c>pageToken</c> presented with any of them changed is rejected with <c>400</c>.
    /// </remarks>
    public Task<AnomaliesResponse> ListAnomalies(ListAnomaliesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/anomalies/v1"),
            [],
            [
                new Param("minCreationTime", request.MinCreationTime),
                new Param("maxCreationTime", request.MaxCreationTime),
                new Param("filter", request.Filter),
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("maxResults", request.MaxResults),
                new Param("pageToken", request.PageToken),
                new Param("includeNotifications", request.IncludeNotifications),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnomaliesResponse>(),
            ListAnomaliesError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an anomaly's review status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PatchAnomalyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the review status of the anomaly identified by <c>{id}</c>, the same identifier <c>getAnomaly</c> accepts. Mirrors the review workflow available in the console: set <c>reviewStatus</c>, and when resolving, qualify it with <c>resolution</c> and optionally a <c>resolutionNote</c> (feedback reason and comment). The change is recorded in the anomaly's review history exactly like a console update, and the actor is derived from the API credentials - never from the request body.
    /// <para>
    /// Validation: <c>reviewStatus</c> is one of <c>NEEDS_REVIEW</c>, <c>UNDER_REVIEW</c>, <c>RESOLVED</c>; <c>resolution</c> (<c>ANOMALY_CONFIRMED</c> or <c>NOT_ANOMALY</c>) is required when <c>reviewStatus</c> is <c>RESOLVED</c> and forbidden otherwise; <c>resolutionNote.reason</c> must belong to the given <c>resolution</c> - <c>SECURITY_BREACH</c>, <c>MISCONFIGURATION</c>, <c>UNINTENTIONAL_PROVISIONING</c>, <c>EXPECTED_COST_SPIKE</c> or <c>ANOMALOUS_OTHER</c> for <c>ANOMALY_CONFIRMED</c>, and <c>FAULTY_ANOMALY_DETECTION_MODEL</c>, <c>INCORRECT_DATA</c>, <c>LOW_IMPACT</c> or <c>NON_ANOMALOUS_OTHER</c> for <c>NOT_ANOMALY</c>. Requires the <c>AnomaliesManager</c> permission and DoiT API access (<c>platform:externalApi</c>).
    /// </para>
    /// </remarks>
    public Task PatchAnomaly(PatchAnomalyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/anomalies/v1/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PatchAnomalyError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
