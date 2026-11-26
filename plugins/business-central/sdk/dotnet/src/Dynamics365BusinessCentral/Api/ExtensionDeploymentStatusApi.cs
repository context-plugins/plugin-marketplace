using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Dynamics365BusinessCentral.Core;
using Dynamics365BusinessCentral.Core.Authentication;
using Dynamics365BusinessCentral.Core.Exceptions;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Core.Request;
using Dynamics365BusinessCentral.Core.Response;
using Dynamics365BusinessCentral.Errors;
using Dynamics365BusinessCentral.Models;
using Dynamics365BusinessCentral.Requests.ExtensionDeploymentStatusApi;

namespace Dynamics365BusinessCentral.Api;

/// <summary>
/// Monitor extension installation progress
/// </summary>
public sealed class ExtensionDeploymentStatusApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ExtensionDeploymentStatusApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Extension Deployment Statuses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesApiExtensionDeploymentStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListExtensionDeploymentStatusesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of ongoing extension deployment statuses.
    /// </remarks>
    public Task<CompaniesApiExtensionDeploymentStatusResponse> ListExtensionDeploymentStatuses(ListExtensionDeploymentStatusesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/extensionDeploymentStatus"),
            [new TemplateParam("company_id", request.CompanyId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesApiExtensionDeploymentStatusResponse>(),
            ListExtensionDeploymentStatusesError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
