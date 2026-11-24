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
/// Find DoiT account managers assigned to your organization.
/// </summary>
public sealed class AccountTeam
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AccountTeam(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List account team
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomersV1AccountTeamResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAccountTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all DoiT account managers assigned to your organization.
    /// </remarks>
    public Task<CustomersV1AccountTeamResponse> ListAccountTeam(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/v1/accountTeam"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomersV1AccountTeamResponse>(),
            ListAccountTeamError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
