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
using Paid.Requests.Costs;

namespace Paid.Api;

public sealed class Costs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Costs(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Submit cost and/or usage data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CostIngestResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCostsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Ingests a batch of cost records. Each record is either a pre-computed <c>cost</c> (caller supplies amount + currency) or a <c>usage</c> record (caller supplies vendor/model/token counts and Paid prices it server-side). The batch is all-or-nothing: if any record fails validation, the entire request is rejected with a 400 and nothing is persisted.
    /// </remarks>
    public Task<CostIngestResponse> CreateCosts(CreateCostsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/costs/bulk"),
            [],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CostIngestResponse>(),
            CreateCostsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
