using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Deliverd.Core;
using Deliverd.Core.Exceptions;
using Deliverd.Core.Models;
using Deliverd.Core.Request;
using Deliverd.Core.Response;
using Deliverd.Errors;
using Deliverd.Requests.RiskIndicators;

namespace Deliverd.Api;

public sealed class RiskIndicators
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal RiskIndicators(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// The AI risk scorecard for a whole month
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1RiskIndicatorsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Each indicator the appetite turns on: its figure for the month against the limits it was judged by (<c>green</c>, <c>amber</c>, <c>red</c> or <c>not_measurable</c>), the two months before, the trend, where a measured indicator stands this month so far, whether a submitted figure is still owed, and the corrective action the month opened. Lower is better for every indicator. Deliverd never stops an agent on a figure.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1RiskIndicators(GetApiV1RiskIndicatorsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/risk-indicators"),
            [],
            [new Param("period", request.Period)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            GetApiV1RiskIndicatorsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Give a submitted indicator's figure for a month
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1RiskIndicatorsByKeyReadingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// For an indicator whose figure comes from outside Deliverd: access reviews, output sampling, downtime, training. Give <c>value</c>, or <c>numerator</c> and <c>denominator</c> for a ratio, and <c>evidence</c> saying where it comes from. Judged against the limits in force when it is saved. A key gives a month's first figure; correcting one is a person's, in the app, with a reason. 409 when a figure already stands.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> PostApiV1RiskIndicatorsByKeyReadings(PostApiV1RiskIndicatorsByKeyReadingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/risk-indicators/{key}/readings"),
            [new TemplateParam("key", request.Key)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            PostApiV1RiskIndicatorsByKeyReadingsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
