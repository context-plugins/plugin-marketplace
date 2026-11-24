using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Basiq.Core;
using Basiq.Core.Exceptions;
using Basiq.Core.Models;
using Basiq.Core.Request;
using Basiq.Core.Response;
using Basiq.Errors;
using Basiq.Models;
using Basiq.Requests.AccountsApi;

namespace Basiq.Api;

public sealed class AccountsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AccountsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve an account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccountResponseResource1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a specific account belonging to a user
    /// </remarks>
    public Task<AccountResponseResource1> GetAccount(GetAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/accounts/{accountId}"),
            [new TemplateParam("userId", request.UserId), new TemplateParam("accountId", request.AccountId)],
            [new Param("filter", request.Filter)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccountResponseResource1>(),
            GetAccountError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsersAccountsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all accounts belonging to a user
    /// </remarks>
    public Task<UsersAccountsResponse> GetAccounts(GetAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/accounts"),
            [new TemplateParam("userId", request.UserId)],
            [new Param("filter", request.Filter)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsersAccountsResponse>(),
            GetAccountsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);
}
