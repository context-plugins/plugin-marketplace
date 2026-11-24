using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Fillo.Core;
using Fillo.Core.Exceptions;
using Fillo.Core.Models;
using Fillo.Core.Request;
using Fillo.Core.Response;
using Fillo.Errors;
using Fillo.Models;
using Fillo.Requests.Insights;

namespace Fillo.Api;

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
    /// Get a form's insights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FormInsights"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFormInsightsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The numbers the dashboard's Insights page shows, from the same core: totals, median completion time, seven-day change, the daily timeline, source and surface breakdowns, the drop-off funnel, open drafts, and every question's distribution. Filters use the same grammar as the responses list, so the numbers and the rows always describe the same set. Accepted responses only. Every question's distribution quotes respondent answers verbatim as labels, so this is a response read wearing an analytics shape: it needs forms:read AND responses:read, the second asserted after authentication and named in its own 403.
    /// </remarks>
    public Task<FormInsights> GetFormInsights(GetFormInsightsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/insights"),
            [new TemplateParam("form", request.Form)],
            [
                new Param("range", request.Range),
                new Param("q", request.Q),
                new Param("source", request.Source),
                new Param("respondent", request.Respondent),
                new Param("where", request.Where),
                new Param("by", request.By),
                new Param("op", request.Op),
                new Param("eq", request.Eq),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FormInsights>(),
            GetFormInsightsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
