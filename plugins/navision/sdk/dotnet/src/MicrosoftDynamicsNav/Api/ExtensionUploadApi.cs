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
using MicrosoftDynamicsNav.Requests.ExtensionUploadApi;

namespace MicrosoftDynamicsNav.Api;

/// <summary>
/// Upload and install per-tenant extensions
/// </summary>
public sealed class ExtensionUploadApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ExtensionUploadApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Extension Upload Record
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExtensionUpload"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateExtensionUploadError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an extension upload record for uploading a per-tenant extension.
    /// </remarks>
    public Task<ExtensionUpload> CreateExtensionUpload(CreateExtensionUploadRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi("/companies({company_id})/extensionUpload"),
            [new TemplateParam("company_id", request.CompanyId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ExtensionUpload>(),
            CreateExtensionUploadError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Install Uploaded Extension
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InstallUploadedExtensionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Triggers the installation of a previously uploaded per-tenant extension.
    /// </remarks>
    public Task InstallUploadedExtension(InstallUploadedExtensionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/extensionUpload({extensionUpload_id})/Microsoft.NAV.upload"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("extensionUpload_id", request.ExtensionUploadId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            InstallUploadedExtensionError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload Extension File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadExtensionFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Uploads the extension file content to the extension upload record.
    /// </remarks>
    public Task UploadExtensionFile(UploadExtensionFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/extensionUpload({extensionUpload_id})/extensionContent"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("extensionUpload_id", request.ExtensionUploadId),
            ],
            [],
            [new HeaderParam("If-Match", request.IfMatch), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            BinaryRequest.Create(request.Body),
            VoidResponse.Instance,
            UploadExtensionFileError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
