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
using Dynamics365BusinessCentral.Requests.EnvironmentOperations;

namespace Dynamics365BusinessCentral.Api;

/// <summary>
/// View and track environment operations
/// </summary>
public sealed class EnvironmentOperations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal EnvironmentOperations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Operations on All Environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApplicationsEnvironmentsOperationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAllEnvironmentOperationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns operations that have occurred on all environments for the application family.
    /// </remarks>
    public Task<ApplicationsEnvironmentsOperationsResponse> ListAllEnvironmentOperations(ListAllEnvironmentOperationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/operations"),
            [new TemplateParam("applicationFamily", request.ApplicationFamily)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApplicationsEnvironmentsOperationsResponse>(),
            ListAllEnvironmentOperationsError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Environment Operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentsOperationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEnvironmentOperationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of operations that have been performed on the environment.
    /// </remarks>
    public Task<EnvironmentsOperationsResponse> ListEnvironmentOperations(ListEnvironmentOperationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/environments/{environmentName}/operations"),
            [new TemplateParam("environmentName", request.EnvironmentName)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EnvironmentsOperationsResponse>(),
            ListEnvironmentOperationsError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
