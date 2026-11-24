using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleSearchConsole.Core;
using GoogleSearchConsole.Core.Exceptions;
using GoogleSearchConsole.Core.Models;
using GoogleSearchConsole.Core.Request;
using GoogleSearchConsole.Core.Response;
using GoogleSearchConsole.Errors;
using GoogleSearchConsole.Models;
using GoogleSearchConsole.Requests.UrlTestingTools;

namespace GoogleSearchConsole.Api;

public sealed class UrlTestingTools
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal UrlTestingTools(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Run mobileFriendlyTest
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RunMobileFriendlyTestResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchconsoleUrlTestingToolsMobileFriendlyTestRunError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Runs Mobile-Friendly Test for a given URL.
    /// </remarks>
    public Task<RunMobileFriendlyTestResponse> SearchconsoleUrlTestingToolsMobileFriendlyTestRun(SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/urlTestingTools/mobileFriendlyTest:run"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RunMobileFriendlyTestResponse>(),
            SearchconsoleUrlTestingToolsMobileFriendlyTestRunError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
