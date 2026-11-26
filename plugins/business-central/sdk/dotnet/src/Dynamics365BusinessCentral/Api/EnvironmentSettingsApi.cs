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
using Dynamics365BusinessCentral.Requests.EnvironmentSettingsApi;

namespace Dynamics365BusinessCentral.Api;

/// <summary>
/// Manage environment settings and configuration
/// </summary>
public sealed class EnvironmentSettingsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal EnvironmentSettingsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Environment Settings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentSettings"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEnvironmentSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns settings for the specified environment.
    /// </remarks>
    public Task<EnvironmentSettings> GetEnvironmentSettings(GetEnvironmentSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}/settings"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EnvironmentSettings>(),
            GetEnvironmentSettingsError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set Application Insights Key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetAppInsightsKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the Azure Application Insights instrumentation key for the environment.
    /// </remarks>
    public Task SetAppInsightsKey(SetAppInsightsKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}/settings/appInsightsKey"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            SetAppInsightsKeyError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
