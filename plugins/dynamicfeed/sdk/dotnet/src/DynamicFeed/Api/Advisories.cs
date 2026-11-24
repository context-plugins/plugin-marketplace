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
using DynamicFeed.Requests.Advisories;

namespace DynamicFeed.Api;

public sealed class Advisories
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Advisories(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Advisories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AdvisoriesAdvisoriesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Recent security advisories / CVEs — affected package, vulnerable version range, patched
    /// version, severity &amp; CVSS. Filter by package/ecosystem/severity. Newest first. Pairs with
    /// /versions: is my stack current AND safe? (Requires API key.)
    /// </remarks>
    public Task<object> AdvisoriesAdvisoriesGet(AdvisoriesAdvisoriesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/advisories"),
            [],
            [
                new Param("q", request.Q),
                new Param("package", request.Package),
                new Param("ecosystem", request.Ecosystem),
                new Param("severity", request.Severity),
                new Param("min_cvss", request.MinCvss),
                new Param("limit", request.Limit),
            ],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            AdvisoriesAdvisoriesGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Advisories Check
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AdvisoriesCheckAdvisoriesCheckGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Is this exact package@version vulnerable? FULL historical lookup across the entire OSV.dev
    /// corpus (Google) — returns every matching advisory + the versions that fix it. For Maven, pass the
    /// full 'group:artifact' coordinate; a bare artifact name returns a hint, not a misleading
    /// 'not vulnerable'. (Requires API key.)
    /// </remarks>
    public Task<object> AdvisoriesCheckAdvisoriesCheckGet(AdvisoriesCheckAdvisoriesCheckGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/advisories/check"),
            [],
            [
                new Param("package", request.Package),
                new Param("version", request.Version),
                new Param("ecosystem", request.Ecosystem),
            ],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            AdvisoriesCheckAdvisoriesCheckGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
