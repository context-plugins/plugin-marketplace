using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Lusha.Core;
using Lusha.Core.Exceptions;
using Lusha.Core.Models;
using Lusha.Core.Request;
using Lusha.Core.Response;
using Lusha.Errors;
using Lusha.Models;
using Lusha.Requests.WebsiteVisits;

namespace Lusha.Api;

/// <summary>
/// Retrieve companies ranked by website-visit signals for your tracked domains.
/// <para>
/// Domains must be configured for tracking in the dashboard. Each result combines a V3 company firmographic preview with behavioral visit metrics (score, sessions, unique visitors, avg session length, and more).
/// </para>
/// </summary>
public sealed class WebsiteVisits
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal WebsiteVisits(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Website Visitors
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebsiteVisitsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWebsiteVisitsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns companies ranked by website-visit signals for your tracked domains and date range.
    /// <para>
    /// Domains must be configured for tracking in the Lusha dashboard — they are resolved to site IDs server-side. Each result combines a V3 company firmographic preview (same shape as Search Companies) with behavioral visit metrics.
    /// </para>
    /// <para>
    /// <b>Notes:</b>
    /// - Date range must be ≤ 3 months
    /// - If any requested domain is not configured for tracking, the entire request fails with <c>400</c>
    /// - <c>limit</c> accepts 1–150
    /// </para>
    /// </remarks>
    public Task<WebsiteVisitsResponse> GetWebsiteVisits(GetWebsiteVisitsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/website-visits"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebsiteVisitsResponse>(),
            GetWebsiteVisitsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
