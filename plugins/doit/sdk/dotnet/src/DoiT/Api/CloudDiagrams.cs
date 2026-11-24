using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Extensions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.CloudDiagrams;

namespace DoiT.Api;

/// <summary>
/// Cloud Diagrams visualize your cloud infrastructure and resource relationships.
/// </summary>
public sealed class CloudDiagrams
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CloudDiagrams(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Export diagram as JSON
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudDiagramExportJsonResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExportCloudDiagramJsonError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Exports the full content of a diagram layer as a structured JSON document,
    /// including all components and export metadata.
    /// </remarks>
    public Task<CloudDiagramExportJsonResponse> ExportCloudDiagramJson(ExportCloudDiagramJsonRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/clouddiagrams/v1/statussheet/{id}/export-json"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CloudDiagramExportJsonResponse>(),
            ExportCloudDiagramJsonError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Find diagrams
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="FindCloudDiagramsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FindCloudDiagramsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns diagram URLs matching the provided resource IDs.
    /// </remarks>
    public Task<IReadOnlyList<FindCloudDiagramsResponse>> FindCloudDiagrams(FindCloudDiagramsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/clouddiagrams/v1/scheme/find"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<FindCloudDiagramsResponse>>(),
            FindCloudDiagramsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get diagram components
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudDiagramsGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCloudDiagramComponentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns diagram and layer data. When the request body is empty, returns all diagrams
    /// the caller has access to. When the body is populated, returns full diagram data including
    /// layer components projected to key display and cloud fields.
    /// </remarks>
    public Task<CloudDiagramsGetResponse> GetCloudDiagramComponents(GetCloudDiagramComponentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/clouddiagrams/v1/scheme/get"),
            [],
            [
                new Param("components", request.Components),
                new Param("external", request.External),
                new Param("element", request.Element),
                new Param("link", request.Link),
                new Param("group", request.Group),
                new Param("note", request.Note),
                new Param("combiner", request.Combiner),
                new Param("type", request.Type),
                new Param("node_type", request.NodeType),
                new Param("alarms_count", request.AlarmsCount),
                new Param("issues_count", request.IssuesCount),
                new Param("skip_empty", request.SkipEmpty),
                new Param("exclude_default_vpc", request.ExcludeDefaultVpc),
                new Param("exclude_empty_subnets", request.ExcludeEmptySubnets),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CloudDiagramsGetResponse>(),
            GetCloudDiagramComponentsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get diagram cost snapshot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudDiagramCostSnapshot"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCloudDiagramCostSnapshotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a bounded cost snapshot for the specified diagram layer over a date window.
    /// The response composes the diagram's total spend, period-over-period change, top
    /// resources by cost (capped at 5), top services by cost (capped at 5), and a trend
    /// series (most recent 12 buckets at the requested interval).
    /// </remarks>
    public Task<CloudDiagramCostSnapshot> GetCloudDiagramCostSnapshot(GetCloudDiagramCostSnapshotRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/clouddiagrams/v1/statussheet/{id}/costs"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("startDate", request.StartDate.ToDate()),
                new Param("endDate", request.EndDate.ToDate()),
                new Param("interval", request.Interval),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CloudDiagramCostSnapshot>(),
            GetCloudDiagramCostSnapshotError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a layer snapshot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudDiagramLayerSnapshot"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCloudDiagramLayerSnapshotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single snapshot of the specified diagram layer identified by its ID.
    /// </remarks>
    public Task<CloudDiagramLayerSnapshot> GetCloudDiagramLayerSnapshot(GetCloudDiagramLayerSnapshotRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/clouddiagrams/v1/statussheet/{id}/snapshot"),
            [new TemplateParam("id", request.Id)],
            [new Param("snapshot_id", request.SnapshotId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CloudDiagramLayerSnapshot>(),
            GetCloudDiagramLayerSnapshotError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get resource relationships
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DiagramRelationshipsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCloudDiagramResourceRelationshipsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Walks the diagram graph from the anchor resource and returns related resources.
    /// Edge traversal walks the diagram's link set (same-scheme guard, BFS, cycle-safe);
    /// group traversal walks the group membership set. The result list is capped at 200
    /// relations; <c>truncated</c> is <c>true</c> when the cap is hit. Read-only: does not mutate
    /// diagram state.
    /// </remarks>
    public Task<DiagramRelationshipsResponse> GetCloudDiagramResourceRelationships(GetCloudDiagramResourceRelationshipsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/clouddiagrams/v1/statussheet/{id}/resources/{rid}/relationships"),
            [new TemplateParam("id", request.Id), new TemplateParam("rid", request.Rid)],
            [
                new Param("direction", request.Direction),
                new Param("depth", request.Depth),
                new Param("kind", request.Kind),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DiagramRelationshipsResponse>(),
            GetCloudDiagramResourceRelationshipsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get diagrams with stats
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CloudDiagramStats"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCloudDiagramsStatsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all diagrams with activity stats for the given time period.
    /// </remarks>
    public Task<IReadOnlyList<CloudDiagramStats>> GetCloudDiagramsStats(GetCloudDiagramsStatsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/clouddiagrams/v1/scheme/stats"),
            [],
            [new Param("start", request.Start.ToIso8601()), new Param("end", request.End.ToIso8601())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<CloudDiagramStats>>(),
            GetCloudDiagramsStatsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get layer components
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudDiagramStatussheetComponents"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetStatussheetComponentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified components of a diagram layer. Provide at least one component
    /// type with one or more IDs in the request body (for example, <c>node</c> or <c>element</c>).
    /// </remarks>
    public Task<CloudDiagramStatussheetComponents> GetStatussheetComponents(GetStatussheetComponentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/clouddiagrams/v1/statussheet/{id}/get"),
            [new TemplateParam("id", request.Id)],
            [new Param("p", request.P)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CloudDiagramStatussheetComponents>(),
            GetStatussheetComponentsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List activity groups for a layer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CloudDiagramSnapshotActivityGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCloudDiagramActivityGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns snapshot activity groups for the specified diagram layer,
    /// ordered by timestamp descending. Each group contains a snapshot reference
    /// and the individual activity records that belong to it.
    /// </remarks>
    public Task<IReadOnlyList<CloudDiagramSnapshotActivityGroup>> ListCloudDiagramActivityGroups(ListCloudDiagramActivityGroupsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/clouddiagrams/v1/activity"),
            [],
            [
                new Param("ss_id", request.SsId),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("tags", request.Tags),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<CloudDiagramSnapshotActivityGroup>>(),
            ListCloudDiagramActivityGroupsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List layer snapshots
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CloudDiagramLayerSnapshot"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCloudDiagramLayerSnapshotsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the list of saved snapshots for the specified diagram layer.
    /// </remarks>
    public Task<IReadOnlyList<CloudDiagramLayerSnapshot>> ListCloudDiagramLayerSnapshots(ListCloudDiagramLayerSnapshotsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/clouddiagrams/v1/statussheet/{id}/snapshots"),
            [new TemplateParam("id", request.Id)],
            [new Param("offset", request.Offset), new Param("limit", request.Limit), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<CloudDiagramLayerSnapshot>>(),
            ListCloudDiagramLayerSnapshotsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List node activities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CloudDiagramNodeActivity"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCloudDiagramNodeActivitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns individual activity records for the specified component node, ordered by timestamp descending.
    /// </remarks>
    public Task<IReadOnlyList<CloudDiagramNodeActivity>> ListCloudDiagramNodeActivities(ListCloudDiagramNodeActivitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/clouddiagrams/v1/activity/node-activities"),
            [],
            [
                new Param("ss_id", request.SsId),
                new Param("nodeId", request.NodeId),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<CloudDiagramNodeActivity>>(),
            ListCloudDiagramNodeActivitiesError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search diagrams and components
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudDiagramsSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchCloudDiagramsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Full-text search across diagram layers, components by name, and components
    /// by property values. Returns three result categories: diagram (matching layers), component
    /// (matching components by name), and prop (matching components by property values).
    /// </remarks>
    public Task<CloudDiagramsSearchResponse> SearchCloudDiagrams(SearchCloudDiagramsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/clouddiagrams/v1/scheme/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CloudDiagramsSearchResponse>(),
            SearchCloudDiagramsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
