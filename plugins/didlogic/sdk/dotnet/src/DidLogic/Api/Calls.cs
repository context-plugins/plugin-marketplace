using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DidLogic.Core;
using DidLogic.Core.Exceptions;
using DidLogic.Core.Extensions;
using DidLogic.Core.Models;
using DidLogic.Core.Request;
using DidLogic.Core.Response;
using DidLogic.Errors;
using DidLogic.Models;
using DidLogic.Requests.Calls;

namespace DidLogic.Api;

public sealed class Calls
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Calls(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Quote the price of an outbound call
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CallPriceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CallPriceShowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// What a call from one of your SIP accounts to <c>b_number</c>, presenting <c>a_number</c> as the caller ID,
    /// will be billed: the destination name, the per-minute price and the billing increment.
    /// <para>
    /// The quote replays what the platform does to the call before it is billed: the SIP account's
    /// destination rewrite, its caller-ID restrictions, routing rules and caller-ID overrides. It then
    /// rates the call with the same code billing uses: exact prices, origin-based rates and markup
    /// included.
    /// </para>
    /// <para>
    /// <b>Not modelled:</b>
    /// - the carrier (trunk) chosen for the call, which can change the increment and, through the
    /// caller ID it presents, the price;
    /// - blocklists and allowlists: a destination that would be refused is still quoted;
    /// - where the platform picks a caller ID at random, the first candidate is used.
    /// </para>
    /// <para>
    /// Send <c>b_number</c> in E.164 (country code first). A national number is quoted only when the SIP
    /// account has a rewrite rule that turns it into E.164.
    /// </para>
    /// </remarks>
    public Task<ApiV1CallPriceResponse> CallPriceShow(CallPriceShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/call_price"),
            [],
            [
                new Param("a_number", request.ANumber),
                new Param("b_number", request.BNumber),
                new Param("sipaccount", request.Sipaccount),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CallPriceResponse>(),
            CallPriceShowError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Download call recordings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CallsRecordingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a single call recording file by its Call ID.
    /// <para>
    /// &gt; ⚠️ <b>Important:</b> this endpoint is a fallback mechanism designed for
    /// &gt; recovering missing recordings when a delivery webhook failed or its
    /// &gt; short-lived URL expired. For production workflows, always use
    /// &gt; Call Recording Webhooks
    /// &gt; instead of polling this API.
    /// </para>
    /// <para>
    /// The Call ID is all you need — the recording is searched for across the
    /// whole period your account retains recordings, so a client that stored only
    /// the Call ID can download the file.
    /// </para>
    /// <para>
    /// ### Rate limits &amp; quotas
    /// </para>
    /// <para>
    /// To prevent system overload, strict limits are enforced per user:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><b>Request frequency:</b> max 1 request per second.</description></item>
    ///   <item><description><b>Recording lookups:</b> max 1 lookup per minute.</description></item>
    /// </list>
    /// <para>
    /// The per-minute quota is consumed by every search query, regardless of
    /// whether a recording is found or the request returns <c>404 Not Found</c> —
    /// searching for the file is the operation that costs resources.
    /// </para>
    /// </remarks>
    public Task CallsRecording(CallsRecordingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/calls/recording/{callid}"),
            [new TemplateParam("callid", request.Callid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CallsRecordingError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve call detail records
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CdrListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CallsShowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of call detail records (CDR) with filtering and pagination options.
    /// <para>
    /// <b>Important notes:</b>
    /// - Results can be filtered by date range, call type, phone numbers, SIP account, AMD status and hangup cause
    /// - Supports both JSON and CSV export formats
    /// - Use pagination for large result sets
    /// - Statistics include total count, duration, and cost
    /// </para>
    /// <para>
    /// <b>When to use:</b>
    /// - Generating call history reports
    /// - Analyzing call patterns and costs
    /// - Exporting billing data
    /// - Monitoring SIP account usage
    /// </para>
    /// <para>
    /// See also: calls_statistics, totals for the same filters.
    /// </para>
    /// </remarks>
    public Task<CdrListResponse> CallsShow(CallsShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/calls"),
            [],
            [
                new Param("type", request.Type),
                new Param("missed", request.Missed),
                new Param("from_search", request.FromSearch),
                new Param("to_search", request.ToSearch),
                new Param("amd_status", request.AmdStatus),
                new Param("hangup_cause", request.HangupCause),
                new Param("filter", request.Filter),
                new Param("sip_account", request.SipAccount),
                new Param("from", request.From?.ToDate()),
                new Param("to", request.To?.ToDate()),
                new Param("all", request.All),
                new Param("page", request.Page),
                new Param("per_page", request.PerPage),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CdrListResponse>(),
            CallsShowError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get call statistics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CallsStatisticsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CallsStatisticsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve aggregated call statistics including totals and counts.
    /// <para>
    /// <b>Response includes:</b>
    /// - Placed calls: total cost and count
    /// - Received calls: total cost and count
    /// - Missed calls: count only
    /// - All calls: combined total cost and count
    /// </para>
    /// <para>
    /// Rows: calls_show.
    /// </para>
    /// </remarks>
    public Task<ApiV1CallsStatisticsResponse> CallsStatistics(CallsStatisticsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/calls/statistics"),
            [],
            [
                new Param("from", request.From),
                new Param("to", request.To),
                new Param("sipfriend", request.Sipfriend),
                new Param("search", request.Search),
                new Param("amd_status", request.AmdStatus),
                new Param("hangup_cause", request.HangupCause),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CallsStatisticsResponse>(),
            CallsStatisticsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
