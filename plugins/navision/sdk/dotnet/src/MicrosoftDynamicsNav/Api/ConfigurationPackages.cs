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
using MicrosoftDynamicsNav.Requests.ConfigurationPackages;

namespace MicrosoftDynamicsNav.Api;

/// <summary>
/// Manage RapidStart configuration packages
/// </summary>
public sealed class ConfigurationPackages
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ConfigurationPackages(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Apply a Configuration Package
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApplyConfigurationPackageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Applies the imported RapidStart configuration package.
    /// </remarks>
    public Task ApplyConfigurationPackage(ApplyConfigurationPackageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/configurationPackages({package_id})/Microsoft.NAV.apply"),
            [new TemplateParam("company_id", request.CompanyId), new TemplateParam("package_id", request.PackageId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ApplyConfigurationPackageError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a Configuration Package
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConfigurationPackage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateConfigurationPackageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new RapidStart configuration package record.
    /// </remarks>
    public Task<ConfigurationPackage> CreateConfigurationPackage(CreateConfigurationPackageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/configurationPackages"),
            [new TemplateParam("company_id", request.CompanyId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ConfigurationPackage>(),
            CreateConfigurationPackageError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Import a Configuration Package
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ImportConfigurationPackageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Imports the uploaded RapidStart configuration package.
    /// </remarks>
    public Task ImportConfigurationPackage(ImportConfigurationPackageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/configurationPackages({package_id})/Microsoft.NAV.import"),
            [new TemplateParam("company_id", request.CompanyId), new TemplateParam("package_id", request.PackageId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ImportConfigurationPackageError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Configuration Packages
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesApiConfigurationPackagesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListConfigurationPackagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of RapidStart configuration packages.
    /// </remarks>
    public Task<CompaniesApiConfigurationPackagesResponse> ListConfigurationPackages(ListConfigurationPackagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/configurationPackages"),
            [new TemplateParam("company_id", request.CompanyId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesApiConfigurationPackagesResponse>(),
            ListConfigurationPackagesError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload Rapidstart Package File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadConfigurationPackageFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Uploads the RapidStart package file content.
    /// </remarks>
    public Task UploadConfigurationPackageFile(UploadConfigurationPackageFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/configurationPackages({package_id})/file('{code}')/content"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("package_id", request.PackageId),
                new TemplateParam("code", request.Code),
            ],
            [],
            [new HeaderParam("If-Match", request.IfMatch), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            BinaryRequest.Create(request.Body),
            VoidResponse.Instance,
            UploadConfigurationPackageFileError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
