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
using DynamicFeed.Requests.FederalRegister;

namespace DynamicFeed.Api;

public sealed class FederalRegister
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal FederalRegister(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Federal Register
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FederalRegisterFederalRegisterGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Recent US Federal Register documents — rules, proposed rules, notices, executive orders (keyless
    /// NARA source). Answers what regulation took effect or what the President signed. (Requires API key.)
    /// </remarks>
    public Task<object> FederalRegisterFederalRegisterGet(FederalRegisterFederalRegisterGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/federal-register"),
            [],
            [
                new Param("query", request.Query),
                new Param("doc_type", request.DocType),
                new Param("agency", request.Agency),
                new Param("days", request.Days),
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
            FederalRegisterFederalRegisterGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
