using System;
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
using Dynamics365BusinessCentral.Requests.AppManagement;

namespace Dynamics365BusinessCentral.Api;

/// <summary>
/// Manage installed applications
/// </summary>
public sealed class AppManagement
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AppManagement(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Install an App
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InstallAppError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Installs the specified app in the environment.
    /// </remarks>
    public Task<EnvironmentOperation> InstallApp(InstallAppRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/install"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
                new TemplateParam("appId", request.AppId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EnvironmentOperation>(),
            InstallAppError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Installed Apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApplicationsEnvironmentsAppsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListInstalledAppsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of apps installed in the specified environment.
    /// </remarks>
    public Task<ApplicationsEnvironmentsAppsResponse> ListInstalledApps(ListInstalledAppsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}/apps"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApplicationsEnvironmentsAppsResponse>(),
            ListInstalledAppsError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Uninstall an App
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UninstallAppError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Uninstalls the specified app from the environment.
    /// </remarks>
    public Task<EnvironmentOperation> UninstallApp(UninstallAppRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/uninstall"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
                new TemplateParam("appId", request.AppId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EnvironmentOperation>(),
            UninstallAppError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an App
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateAppError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Schedules an update of the specified app to a newer version.
    /// </remarks>
    public Task<EnvironmentOperation> UpdateApp(UpdateAppRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/update"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
                new TemplateParam("appId", request.AppId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EnvironmentOperation>(),
            UpdateAppError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
