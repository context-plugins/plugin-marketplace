using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Models;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Errors;
using Contentstack.Models;
using Contentstack.Requests.ManifestApi;

namespace Contentstack.Api;

/// <summary>
/// The manifest endpoint returns a list of all active experiences and their corresponding variants that are activated for the current user based on their attributes and audience membership.
/// </summary>
public sealed class ManifestApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal ManifestApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get personalization manifest
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Manifest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetManifestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all active personalization experiences and their corresponding content variant mappings for the current user. The manifest is evaluated in real-time based on the user's attributes and current audience memberships. This endpoint is called at the beginning of a user session to determine which content variants to display.
    /// </remarks>
    public Task<Manifest> GetManifest(GetManifestRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEventsApi("/manifest"),
            [],
            [],
            [
                new HeaderParam("x-project-uid", request.XProjectUid),
                new HeaderParam("x-cs-personalize-user-uid", request.XCsPersonalizeUserUid),
                new HeaderParam("x-forwarded-for", request.XForwardedFor),
                new HeaderParam("user-agent", request.UserAgent),
                new HeaderParam("referer", request.Referer),
                new HeaderParam("x-page-url", request.XPageUrl),
                new HeaderParam("x-live-attributes", request.XLiveAttributes),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Manifest>(),
            GetManifestError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
