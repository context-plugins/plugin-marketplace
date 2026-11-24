using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CommonElements.Core;
using CommonElements.Core.Exceptions;
using CommonElements.Core.Models;
using CommonElements.Core.Request;
using CommonElements.Core.Response;
using CommonElements.Errors;
using CommonElements.Models;
using CommonElements.Requests.BulkDelivery;

namespace CommonElements.Api;

/// <summary>
/// Asynchronous exports for datasets larger than one HTTP response. Request, poll, download a durable artifact with a manifest and a column dictionary beside it — or put it on a schedule and stop asking. Growth plan and above.
/// </summary>
public sealed class BulkDelivery
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BulkDelivery(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel a queued or running delivery
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DeliveriesResponse3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeliveriesCancelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel a queued or running delivery. Authorization is enforced in SQL from the key's organization rather than asserted by the route, so a delivery belonging to another organization cannot be cancelled even by a caller that skips the check.
    /// </remarks>
    public Task<ApiV1DeliveriesResponse3> DeliveriesCancel(DeliveriesCancelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/deliveries/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1DeliveriesResponse3>(),
            DeliveriesCancelError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The deliverable catalog and its column dictionary: what can be delivered, in…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DeliveriesDatasetsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeliveriesCatalogError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The deliverable catalog and its column dictionary: what can be delivered, in what shape, and — resolved for the key on this request — what your plan allows. Every dataset is listed, each carrying <c>available_to_you</c> and the reason when it is false. Add <c>?dataset=</c> for one dataset's full column dictionary.
    /// <list type="bullet">
    ///   <item><description>The dictionary returned here is the same document shipped inside each delivery, so a schema can be built against this endpoint before the first file arrives, and diffed afterwards.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1DeliveriesDatasetsResponse> DeliveriesCatalog(DeliveriesCatalogRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/deliveries/datasets"),
            [],
            [new Param("dataset", request.Dataset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1DeliveriesDatasetsResponse>(),
            DeliveriesCatalogError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Request an asynchronous bulk delivery
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DeliveriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeliveriesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Request an asynchronous bulk delivery. Returns immediately with a delivery id; the export runs server-side with keyset pagination and produces a durable artifact with a manifest and a column dictionary beside it. Use this instead of /v1/export when the dataset is larger than one HTTP response can carry.
    /// <para>
    /// <b>Plan:</b> Bulk delivery is a Growth plan capability, the same line /v1/export draws. Row cap, lookback window, monthly delivery quota and concurrency are all resolved server-side from the key; none of them is a parameter.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>One delivery counts once against your monthly request quota and once against your plan's separate monthly delivery quota. Polling its status costs a request like any other call.</description></item>
    ///   <item><description>A refusal names its reason: <c>tier_not_allowed</c> when the plan does not include delivery, <c>quota_exceeded</c> when the monthly delivery quota is spent, and 429 again when too many deliveries are already running.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1DeliveriesResponse> DeliveriesCreate(DeliveriesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/deliveries"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1DeliveriesResponse>(),
            DeliveriesCreateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stream a delivered artifact, or one of its sidecars
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DeliveriesDownloadResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeliveriesDownloadError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stream a delivered artifact, or one of its sidecars. Two doors, one gate: the artifact's own capability token for a pipeline that should not hold an API key, or the organization's API key for anything that already does. Either way the same database function re-checks that the run succeeded, that its retention window is still open, and that the presenter is entitled.
    /// <list type="bullet">
    ///   <item><description>The response is the file itself, not a redirect to storage. A signed storage URL would keep working after the artifact expired, after the subscription lapsed and after the key was revoked, with no server left in the path to reconsider.</description></item>
    ///   <item><description>Fetch <c>?part=dictionary</c> to build a schema before parsing, and <c>?part=manifest</c> to verify the row count and checksum after downloading.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1DeliveriesDownloadResponse> DeliveriesDownload(DeliveriesDownloadRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/deliveries/{id}/download"),
            [new TemplateParam("id", request.Id)],
            [new Param("token", request.Token), new Param("part", request.Part)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1DeliveriesDownloadResponse>(),
            DeliveriesDownloadError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List this organization's deliveries, most recent first, with their status, row…
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DeliveriesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeliveriesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List this organization's deliveries, most recent first, with their status, row and byte counts, checksum, and download links while they are live.
    /// </remarks>
    public Task<ApiV1DeliveriesResponse1> DeliveriesList(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/deliveries"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1DeliveriesResponse1>(),
            DeliveriesListError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove a recurring delivery
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DeliveriesSchedulesResponse3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeliveriesScheduleDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove a recurring delivery. Artifacts already produced are unaffected and remain downloadable until their retention window closes.
    /// </remarks>
    public Task<ApiV1DeliveriesSchedulesResponse3> DeliveriesScheduleDelete(DeliveriesScheduleDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/deliveries/schedules/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1DeliveriesSchedulesResponse3>(),
            DeliveriesScheduleDeleteError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// One recurring delivery and its recent runs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DeliveriesSchedulesResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeliveriesScheduleDetailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One recurring delivery and its recent runs.
    /// </remarks>
    public Task<ApiV1DeliveriesSchedulesResponse2> DeliveriesScheduleDetail(DeliveriesScheduleDetailRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/deliveries/schedules/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1DeliveriesSchedulesResponse2>(),
            DeliveriesScheduleDetailError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Pause, resume, retime or refilter a recurring delivery
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DeliveriesSchedulesResponse3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeliveriesScheduleUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Pause, resume, retime or refilter a recurring delivery. Dataset, format and mode are deliberately not editable: they are what entitlement was checked against at creation, and letting a PATCH swap the dataset would turn one authorized decision into a standing permission for any other. Change them by creating a new schedule.
    /// <list type="bullet">
    ///   <item><description>For a <c>changes</c> schedule the watermark is untouched by a pause, so the first run after resuming covers everything that happened while it slept — clamped, as always, by your plan's lookback window.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1DeliveriesSchedulesResponse3> DeliveriesScheduleUpdate(DeliveriesScheduleUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/deliveries/schedules/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1DeliveriesSchedulesResponse3>(),
            DeliveriesScheduleUpdateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a recurring delivery: this dataset, these filters, this format, on this…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DeliveriesSchedulesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeliveriesSchedulesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a recurring delivery: this dataset, these filters, this format, on this cadence, produced whether or not anyone is awake. In <c>changes</c> mode each run covers only what was observed after the previous SUCCESSFUL delivery, so a failed run is re-covered on the next one rather than silently skipped.
    /// <para>
    /// <b>Plan:</b> Growth plan and above, the same gate as one-off delivery.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Dataset, format and mode are fixed at creation. Filters, columns, cadence and pause/resume are editable through PATCH on the schedule.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1DeliveriesSchedulesResponse> DeliveriesSchedulesCreate(DeliveriesSchedulesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/deliveries/schedules"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1DeliveriesSchedulesResponse>(),
            DeliveriesSchedulesCreateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List this organization's recurring deliveries, with their cadence, next run…
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DeliveriesSchedulesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeliveriesSchedulesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List this organization's recurring deliveries, with their cadence, next run, watermark and paused state.
    /// </remarks>
    public Task<ApiV1DeliveriesSchedulesResponse1> DeliveriesSchedulesList(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/deliveries/schedules"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1DeliveriesSchedulesResponse1>(),
            DeliveriesSchedulesListError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Status of one delivery: progress while it runs, download links once it…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1DeliveriesResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeliveriesStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Status of one delivery: progress while it runs, download links once it succeeds, and — when it fails — a machine-readable <c>error.code</c> with a message written for the person who has to decide what to do next.
    /// </remarks>
    public Task<ApiV1DeliveriesResponse2> DeliveriesStatus(DeliveriesStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/deliveries/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1DeliveriesResponse2>(),
            DeliveriesStatusError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
