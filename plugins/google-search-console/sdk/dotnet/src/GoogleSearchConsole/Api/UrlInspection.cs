using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleSearchConsole.Core;
using GoogleSearchConsole.Core.Authentication;
using GoogleSearchConsole.Core.Exceptions;
using GoogleSearchConsole.Core.Models;
using GoogleSearchConsole.Core.Request;
using GoogleSearchConsole.Core.Response;
using GoogleSearchConsole.Errors;
using GoogleSearchConsole.Models;
using GoogleSearchConsole.Requests.UrlInspection;

namespace GoogleSearchConsole.Api;

public sealed class UrlInspection
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal UrlInspection(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Inspect index
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InspectUrlIndexResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchconsoleUrlInspectionIndexInspectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Index inspection.
    /// </remarks>
    public Task<InspectUrlIndexResponse> SearchconsoleUrlInspectionIndexInspect(SearchconsoleUrlInspectionIndexInspectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/urlInspection/index:inspect"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<InspectUrlIndexResponse>(),
            SearchconsoleUrlInspectionIndexInspectError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
