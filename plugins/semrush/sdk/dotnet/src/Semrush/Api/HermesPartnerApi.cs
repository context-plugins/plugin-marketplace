using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Semrush.Core;
using Semrush.Core.Exceptions;
using Semrush.Core.Models;
using Semrush.Core.Request;
using Semrush.Core.Response;
using Semrush.Errors;
using Semrush.Models;
using Semrush.Requests.HermesPartnerApi;

namespace Semrush.Api;

public sealed class HermesPartnerApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal HermesPartnerApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Semrush Get event status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApisV4HermesV0EventByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Documentation
    /// </remarks>
    public Task<EventResponse> GetApisV4HermesV0EventById(GetApisV4HermesV0EventByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/apis/v4/hermes/v0/event/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EventResponse>(),
            GetApisV4HermesV0EventByIdError.Response,
            _auth.JwtIssuerToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Semrush Get available subscriptions
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AppSubscriptionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApisV4HermesV0SubscriptionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all application's registered subscriptions
    /// Documentation
    /// </remarks>
    public Task<AppSubscriptionsResponse> GetApisV4HermesV0Subscriptions(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/apis/v4/hermes/v0/subscriptions"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AppSubscriptionsResponse>(),
            GetApisV4HermesV0SubscriptionsError.Response,
            _auth.JwtIssuerToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Semrush Get user's subscription status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AppUserSubscriptionStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApisV4HermesV0UserByUserIdSubscriptionByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Documentation
    /// </remarks>
    public Task<AppUserSubscriptionStatusResponse> GetApisV4HermesV0UserByUserIdSubscriptionById(GetApisV4HermesV0UserByUserIdSubscriptionByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/apis/v4/hermes/v0/user/{user_id}/subscription/{id}"),
            [new TemplateParam("user_id", request.UserId), new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AppUserSubscriptionStatusResponse>(),
            GetApisV4HermesV0UserByUserIdSubscriptionByIdError.Response,
            _auth.JwtIssuerToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Semrush Send notification
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApisV4HermesV0EventError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Documentation
    /// </remarks>
    public Task PostApisV4HermesV0Event(PostApisV4HermesV0EventRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/apis/v4/hermes/v0/event"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PostApisV4HermesV0EventError.Response,
            _auth.JwtIssuerToken,
            requestOptions,
            cancellationToken);
}
