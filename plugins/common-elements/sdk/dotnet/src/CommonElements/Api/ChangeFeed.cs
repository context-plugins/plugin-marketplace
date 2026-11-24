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
using CommonElements.Requests.ChangeFeed;

namespace CommonElements.Api;

/// <summary>
/// What changed, and when. The rest of the API describes the association graph as it stands today; this describes it moving.
/// </summary>
public sealed class ChangeFeed
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ChangeFeed(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// The trigger-event feed: board turnover, president changes, management-company…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ChangesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ChangesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The trigger-event feed: board turnover, president changes, management-company moves, self-managed transitions, registration status and name changes, and license events across the association graph. This is the programmatic form of the change feed on data.commonelements.com, and the endpoint to poll when you want to act on a community the week something changed rather than re-download a static list.
    /// <para>
    /// <b>Plan:</b> Your plan sets the row cap, and a maximum lookback window (table below). Free keys: up to 50 rows per request; paid tiers raise the cap.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>No officer names, ever. The feed reads a person-stripped view by construction: officer changes come back as counts and canonical titles, and management changes (none detected yet) as firm names. There is no parameter that widens this.</description></item>
    ///   <item><description>"total" in the pagination block is the count of matching rows inside your plan window, not the count in the whole dataset.</description></item>
    ///   <item><description>With no kind named, the feed returns association events only. Contractor license events (license_added, license_lapsed) are a separate stream: name the kind to get them. The first time a board is observed is not a change and is never returned.</description></item>
    ///   <item><description>Two caps stack and the tighter one wins: the per-request free-plan row cap of 50, and your plan row cap in the table above. A free key therefore receives up to 50 rows per request within a 30-day window. When a response was shortened by the free cap it also carries a "row_cap" field in the envelope.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1ChangesResponse> Changes(ChangesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/changes"),
            [],
            [
                new Param("kind", request.Kind),
                new Param("state", request.State),
                new Param("county", request.County),
                new Param("subtype", request.Subtype),
                new Param("since", request.Since),
                new Param("until", request.Until),
                new Param("min_units", request.MinUnits),
                new Param("max_units", request.MaxUnits),
                new Param("min_magnitude", request.MinMagnitude),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ChangesResponse>(),
            ChangesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Counts by change kind over your window: how many events, across how many…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ChangesSummaryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ChangesSummaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Counts by change kind over your window: how many events, across how many distinct associations, in how many states. The cheap call for a dashboard tile or a scheduled digest, and the one to run first when you are sizing the dataset before committing to a plan.
    /// <para>
    /// <b>Plan:</b> Available on every plan, uncapped: this returns one aggregate row per change kind, not a row listing. The lookback window is set by your plan, the same window /api/v1/changes uses.
    /// </para>
    /// </remarks>
    public Task<ApiV1ChangesSummaryResponse> ChangesSummary(ChangesSummaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/changes/summary"),
            [],
            [new Param("since", request.Since), new Param("state", request.State)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ChangesSummaryResponse>(),
            ChangesSummaryError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
