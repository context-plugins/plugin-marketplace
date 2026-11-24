using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Divvy.Core;
using Divvy.Core.Authentication;
using Divvy.Core.Exceptions;
using Divvy.Core.Models;
using Divvy.Core.Request;
using Divvy.Core.Response;
using Divvy.Errors;
using Divvy.Models;
using Divvy.Requests.AuthenticationApi;

namespace Divvy.Api;

public sealed class AuthenticationApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal AuthenticationApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get API session details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SessionInfoResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSessionInfoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about your current API session. This includes information about the current organization ID, user ID, and MFA status of the organization.
    /// </remarks>
    public Task<SessionInfoResponseDto> GetSessionInfo(GetSessionInfoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/login/session"),
            [],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SessionInfoResponseDto>(),
            GetSessionInfoError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of login organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListAllResponseDtoAllOrganizationsResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAllOrganizationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of organizations you can access with your current API session. You get 100 results on one page of results.
    /// <para>
    /// In the response, you get a list of organizations and console organizations. When a console organization is available in the response, this indicates that the console organization is a parent of the listed organization.
    /// </para>
    /// </remarks>
    public Task<ListAllResponseDtoAllOrganizationsResponseDto> ListAllOrganizations(ListAllOrganizationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/login/organizations"),
            [],
            [new Param("page", request.Page)],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListAllResponseDtoAllOrganizationsResponseDto>(),
            ListAllOrganizationsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// API login
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LoginResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LoginError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sign in to your BILL developer account. In the response, your API session is created and a BILL-generated <c>sessionId</c> is available. Use the <c>sessionId</c> in all subsequent API calls to confirm that you are in a signed-in session.
    /// <para>
    /// To create an MFA-trusted API session, set <c>rememberMeId</c> and <c>device</c> in addition to the required fields. See MFA setup for information about the BILL MFA process.
    /// </para>
    /// <para>
    /// You can sign out with <c>POST /v3/logout</c>. If your API session is inactive for 35 minutes, the session expires and you are automatically signed out.
    /// </para>
    /// <para>
    /// See API partner login for information about the additional permissions you get with the API partner login.
    /// </para>
    /// <para>
    /// <b>Note</b>: This section is about authentication for working with the BILL v3 API. See Authentication with Spend &amp; Expense API token for information about authentication for the Spend &amp; Expense API endpoints.
    /// </para>
    /// </remarks>
    public Task<LoginResponseDto> Login(LoginRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/login"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<LoginResponseDto>(),
            LoginError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// API logout
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LogoutError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sign out of your BILL developer account. In response, the current <c>sessionId</c> expires and your API session is terminated.
    /// <para>
    /// You will be required to sign in again with <c>/v3/login</c> before you can make another API call.
    /// </para>
    /// </remarks>
    public Task Logout(LogoutRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/logout"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            LogoutError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
