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
using Dynamics365BusinessCentral.Requests.AvailableApplications;

namespace Dynamics365BusinessCentral.Api;

/// <summary>
/// Query available application versions and countries
/// </summary>
public sealed class AvailableApplications
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AvailableApplications(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Available Countries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApplicationsAvailableCountriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAvailableCountriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of countries where environments can be created.
    /// </remarks>
    public Task<ApplicationsAvailableCountriesResponse> ListAvailableCountries(ListAvailableCountriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/availableCountries"),
            [new TemplateParam("applicationFamily", request.ApplicationFamily)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApplicationsAvailableCountriesResponse>(),
            ListAvailableCountriesError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Available Application Versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApplicationsAvailableApplicationVersionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAvailableVersionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of available application versions for the specified application family.
    /// </remarks>
    public Task<ApplicationsAvailableApplicationVersionsResponse> ListAvailableVersions(ListAvailableVersionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/availableApplicationVersions"),
            [new TemplateParam("applicationFamily", request.ApplicationFamily)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApplicationsAvailableApplicationVersionsResponse>(),
            ListAvailableVersionsError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
