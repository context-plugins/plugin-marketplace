using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Shortcut.Core;
using Shortcut.Core.Exceptions;
using Shortcut.Core.Models;
using Shortcut.Core.Request;
using Shortcut.Core.Response;
using Shortcut.Errors;
using Shortcut.Models;
using Shortcut.Requests.ExternalLink;

namespace Shortcut.Api;

public sealed class ExternalLink
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ExternalLink(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get External Link Stories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="StorySlim"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExternalLinkStoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Stories which have a given External Link associated with them.
    /// </remarks>
    public Task<IReadOnlyList<StorySlim>> GetExternalLinkStories(GetExternalLinkStoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/external-link/stories"),
            [],
            [new Param("external_link", request.ExternalLink)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<StorySlim>>(),
            GetExternalLinkStoriesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
