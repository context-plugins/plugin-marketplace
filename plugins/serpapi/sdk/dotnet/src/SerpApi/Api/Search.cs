using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using SerpApi.Core;
using SerpApi.Core.ErrorResponse;
using SerpApi.Core.Exceptions;
using SerpApi.Core.Models;
using SerpApi.Core.Request;
using SerpApi.Core.Response;
using SerpApi.Requests.Search;

namespace SerpApi.Api;

public sealed class Search
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Search(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a previously submitted asynchronous search
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the JSON results for an asynchronous search by its <c>search_id</c>. The <c>search_id</c> is returned by /search when <c>async=true</c>.
    /// </remarks>
    public Task<object> GetSearch(GetSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/searches/{search_id}"),
            [new TemplateParam("search_id", request.SearchId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run a search across a supported engine
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Runs a real-time search against the engine specified by the <c>engine</c> query parameter. Supports Google, Bing, YouTube, and many other engines. Engine-specific parameters are documented in the SerpApi engine reference.
    /// </remarks>
    public Task<object> RunSearch(RunSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/search"),
            [],
            [
                new Param("engine", request.Engine),
                new Param("q", request.Q),
                new Param("search_query", request.SearchQuery),
                new Param("api_key", request.ApiKey),
                new Param("location", request.Location),
                new Param("gl", request.Gl),
                new Param("hl", request.Hl),
                new Param("device", request.Device),
                new Param("no_cache", request.NoCache),
                new Param("async", request.Async),
                new Param("output", request.Output),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
