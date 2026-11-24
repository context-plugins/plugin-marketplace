using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using MicrosoftDynamicsNav.Core;
using MicrosoftDynamicsNav.Core.Authentication;
using MicrosoftDynamicsNav.Core.Exceptions;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Core.Request;
using MicrosoftDynamicsNav.Core.Response;
using MicrosoftDynamicsNav.Errors;
using MicrosoftDynamicsNav.Models;
using MicrosoftDynamicsNav.Requests.ExtensionsApi;

namespace MicrosoftDynamicsNav.Api;

/// <summary>
/// Manage installed extensions
/// </summary>
public sealed class ExtensionsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ExtensionsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Install an Extension
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InstallExtensionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Installs a published extension on the tenant.
    /// </remarks>
    public Task InstallExtension(InstallExtensionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/extensions({extension_id})/Microsoft.NAV.install"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("extension_id", request.ExtensionId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            InstallExtensionError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Extensions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesApiExtensionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListExtensionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of extensions published to the tenant.
    /// </remarks>
    public Task<CompaniesApiExtensionsResponse> ListExtensions(ListExtensionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi("/companies({company_id})/extensions"),
            [new TemplateParam("company_id", request.CompanyId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesApiExtensionsResponse>(),
            ListExtensionsError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Uninstall and Delete Extension Data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UninstallAndDeleteExtensionDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Uninstalls an extension and deletes all data owned by the extension. This action cannot be undone.
    /// </remarks>
    public Task UninstallAndDeleteExtensionData(UninstallAndDeleteExtensionDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/extensions({extension_id})/Microsoft.NAV.uninstallAndDeleteExtensionData"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("extension_id", request.ExtensionId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UninstallAndDeleteExtensionDataError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Uninstall an Extension
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UninstallExtensionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Uninstalls an extension from the tenant.
    /// </remarks>
    public Task UninstallExtension(UninstallExtensionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/extensions({extension_id})/Microsoft.NAV.uninstall"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("extension_id", request.ExtensionId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UninstallExtensionError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unpublish an Extension
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnpublishExtensionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Unpublishes an uninstalled extension from the tenant.
    /// </remarks>
    public Task UnpublishExtension(UnpublishExtensionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/extensions({extension_id})/Microsoft.NAV.unpublish"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("extension_id", request.ExtensionId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UnpublishExtensionError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
