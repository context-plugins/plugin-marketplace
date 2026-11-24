using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Paid.Core;
using Paid.Core.Authentication;
using Paid.Core.Exceptions;
using Paid.Core.Extensions;
using Paid.Core.Models;
using Paid.Core.Request;
using Paid.Core.Response;
using Paid.Errors;
using Paid.Models;
using Paid.Requests.Traces;

namespace Paid.Api;

public sealed class Traces
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Traces(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Fetch cost traces for an organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TracesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTracesError"/> when the server returns an error response.</exception>
    public Task<TracesResponse> GetTraces(GetTracesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/traces"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("startTime", request.StartTime?.ToIso8601()),
                new Param("endTime", request.EndTime?.ToIso8601()),
                new Param("externalCustomerId", request.ExternalCustomerId),
                new Param("externalProductId", request.ExternalProductId),
                new Param("externalAgentId", request.ExternalAgentId),
                new Param("metadata", request.Metadata),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TracesResponse>(),
            GetTracesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
