using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Postscript.Core;
using Postscript.Core.Exceptions;
using Postscript.Core.Models;
using Postscript.Core.Request;
using Postscript.Core.Response;
using Postscript.Errors;
using Postscript.Models;
using Postscript.Requests.Keywords;

namespace Postscript.Api;

/// <summary>
/// Read the opt-in keywords configured for a shop.
/// </summary>
public sealed class Keywords
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Keywords(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Keyword
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2KeywordsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetKeywordError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a Keyword by its ID
    /// </remarks>
    public Task<ApiV2KeywordsResponse> GetKeyword(GetKeywordRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/keywords/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2KeywordsResponse>(),
            GetKeywordError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Keywords
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2KeywordsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetKeywordsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of all active keywords for a shop.
    /// </remarks>
    public Task<ApiV2KeywordsResponse1> GetKeywords(GetKeywordsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/keywords"),
            [],
            [],
            [new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2KeywordsResponse1>(),
            GetKeywordsError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);
}
