using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DynamicFeed.Core;
using DynamicFeed.Core.Authentication;
using DynamicFeed.Core.Exceptions;
using DynamicFeed.Core.Models;
using DynamicFeed.Core.Request;
using DynamicFeed.Core.Response;
using DynamicFeed.Errors;
using DynamicFeed.Requests.Security;

namespace DynamicFeed.Api;

public sealed class Security
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Security(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Package Health Ep
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PackageHealthEpPackageHealthGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Package health &amp; security posture from deps.dev (Google Open Source Insights): latest version,
    /// license, known-advisory count, the OpenSSF Scorecard (0-10 + weakest checks) and popularity. The
    /// 'should I depend on this?' check — pairs with /advisories/check and /versions. (Requires API key.)
    /// </remarks>
    public Task<object> PackageHealthEpPackageHealthGet(PackageHealthEpPackageHealthGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/package-health"),
            [],
            [
                new Param("package", request.Package),
                new Param("ecosystem", request.Ecosystem),
                new Param("version", request.Version),
            ],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            PackageHealthEpPackageHealthGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
