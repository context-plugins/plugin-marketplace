using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FacebookBusinessManager.Core;
using FacebookBusinessManager.Core.Exceptions;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Core.Request;
using FacebookBusinessManager.Core.Response;
using FacebookBusinessManager.Errors;
using FacebookBusinessManager.Models;
using FacebookBusinessManager.Requests.AdAccounts;

namespace FacebookBusinessManager.Api;

/// <summary>
/// Manage advertising accounts including settings, spend limits, and account-level configurations.
/// </summary>
public sealed class AdAccounts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AdAccounts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Facebook Business Manager Get ad account details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AdAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAdAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the details of a specific ad account including settings, spend limits, and status information.
    /// </remarks>
    public Task<AdAccount> GetAdAccount(GetAdAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/act_{ad_account_id}"),
            [new TemplateParam("ad_account_id", request.AdAccountId)],
            [new Param("fields", request.Fields)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AdAccount>(),
            GetAdAccountError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
