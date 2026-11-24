using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using RocketReach.Core;
using RocketReach.Core.Exceptions;
using RocketReach.Core.Models;
using RocketReach.Core.Request;
using RocketReach.Core.Response;
using RocketReach.Errors;
using RocketReach.Models;
using RocketReach.Requests.Account;

namespace RocketReach.Api;

public sealed class Account
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Account(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get a RocketReach API Account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiKeyModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateNewApiKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create New API Key
    /// </remarks>
    public Task<ApiKeyModel> CreateNewApiKey(CreateNewApiKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/account/key/"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormUrlEncodedRequest.Create(new Param("api_key", request.ApiKey)),
            JsonResponse.Create<ApiKeyModel>(),
            CreateNewApiKeyError.Response,
            _auth.RocketReachApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// RocketReach API Account
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UserModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve &amp; Manage Account Details
    /// </remarks>
    public Task<UserModel> GetAccount(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/account/"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UserModel>(),
            GetAccountError.Response,
            _auth.RocketReachApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// ⭐ RocketReach Universal API Account
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UniversalCreditsUserModelWithExtraAttributes"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUniversalAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve &amp; Manage Account Details
    /// </remarks>
    public Task<UniversalCreditsUserModelWithExtraAttributes> GetUniversalAccount(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/universal/account/"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UniversalCreditsUserModelWithExtraAttributes>(),
            GetUniversalAccountError.Response,
            _auth.RocketReachApiKey,
            requestOptions,
            cancellationToken);
}
