using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Models;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Errors;
using Contentstack.Models;
using Contentstack.Requests.Accounts;

namespace Contentstack.Api;

/// <summary>
/// Accounts represent authenticated connections to external services and third-party platforms used by automations as action targets.
/// </summary>
public sealed class Accounts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Accounts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get all accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccountList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all external service account connections configured for the automation project, such as connections to Slack, email services, or other third-party platforms.
    /// </remarks>
    public Task<AccountList> GetAllAccounts(GetAllAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAutomateManagementAccountsApi(
                "/v1/organizations/{organization_uid}/projects/{project_uid}/accounts"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("project_uid", request.ProjectUid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccountList>(),
            GetAllAccountsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
