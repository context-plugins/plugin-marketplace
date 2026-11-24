using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Apigee.Core;
using Apigee.Core.Authentication;
using Apigee.Core.Exceptions;
using Apigee.Core.Request;
using Apigee.Core.Response;
using Apigee.Errors;
using Apigee.Models;

namespace Apigee.Api;

public sealed class Hybrid
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Hybrid(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List issuers
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleCloudApigeeV1ListHybridIssuersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigeeHybridIssuersListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists hybrid services and its trusted issuers service account ids. This api is authenticated and unauthorized(allow all the users) and used by runtime authn-authz service to query control plane's issuer service account ids.
    /// </remarks>
    public Task<GoogleCloudApigeeV1ListHybridIssuersResponse> ApigeeHybridIssuersList(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/hybrid/issuers"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleCloudApigeeV1ListHybridIssuersResponse>(),
            ApigeeHybridIssuersListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
