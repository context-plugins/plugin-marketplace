using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;

namespace DoiT.Api;

/// <summary>
/// Metadata about supported cloud providers.
/// </summary>
public sealed class Platforms
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Platforms(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List available platforms
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SupportV1MetadataPlatformsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPlatformsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all the available platforms.
    /// </remarks>
    public Task<SupportV1MetadataPlatformsResponse> ListPlatforms(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/support/v1/metadata/platforms"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SupportV1MetadataPlatformsResponse>(),
            ListPlatformsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
