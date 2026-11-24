using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Ortto.Core;
using Ortto.Core.Exceptions;
using Ortto.Core.Models;
using Ortto.Core.Request;
using Ortto.Core.Response;
using Ortto.Errors;
using Ortto.Models;
using Ortto.Requests.Tags;

namespace Ortto.Api;

/// <summary>
/// Retrieve account tags.
/// </summary>
public sealed class Tags
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Tags(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a list of tags
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TagsGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTagsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the tags configured on the account. An empty body returns all tags; an optional search term filters the result.
    /// </remarks>
    public Task<TagsGetResponse> GetTags(GetTagsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tags/get"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TagsGetResponse>(),
            GetTagsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
