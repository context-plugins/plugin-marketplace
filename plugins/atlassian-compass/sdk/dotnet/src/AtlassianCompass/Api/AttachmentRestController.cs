using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AtlassianCompass.Core;
using AtlassianCompass.Core.Exceptions;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Core.Request;
using AtlassianCompass.Core.Response;
using AtlassianCompass.Errors;
using AtlassianCompass.Models;
using AtlassianCompass.Requests.AttachmentRestController;

namespace AtlassianCompass.Api;

public sealed class AttachmentRestController
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AttachmentRestController(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete API spec for a component
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiSpecError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete the API spec file for a component.
    /// </remarks>
    public Task<string> DeleteApiSpec(DeleteApiSpecRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/compass/v1/component/{componentId}/api_specs"),
            [new TemplateParam("componentId", request.ComponentId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<string>(),
            DeleteApiSpecError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Forge App attachment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAttachmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete file attached to a component. If you need to have attachment upload enabled for your Compass Forge app, contact Atlassian support.
    /// </remarks>
    public Task DeleteAttachment(DeleteAttachmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}"),
            [
                new TemplateParam("componentId", request.ComponentId),
                new TemplateParam("forgeAppId", request.ForgeAppId),
                new TemplateParam("key", request.Key),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAttachmentError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Forge App attachment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Attachment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAttachmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a file attached to a component. If you need to have attachment upload enabled for your Compass Forge app, contact Atlassian support.
    /// </remarks>
    public Task<Attachment> GetAttachment(GetAttachmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}"),
            [
                new TemplateParam("componentId", request.ComponentId),
                new TemplateParam("forgeAppId", request.ForgeAppId),
                new TemplateParam("key", request.Key),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Attachment>(),
            GetAttachmentError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload Component API Spec
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadApiSpecError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload api specs for a component.
    /// <para>
    /// The request body should be a file with the api-spec content.
    /// </para>
    /// <para>
    /// Example: This curl command uploads a spec file (swagger.yaml) for the component.
    /// <code>
    /// curl --request PUT \
    /// --url 'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/api_specs' \
    /// --user 'email@example.com:' \
    /// --header 'Content-Type: multipart/form-data' \
    /// --form file=@/path/to/file/swagger.yaml
    /// </code>
    /// </para>
    /// </remarks>
    public Task<string> UploadApiSpec(UploadApiSpecRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/compass/v1/component/{componentId}/api_specs"),
            [new TemplateParam("componentId", request.ComponentId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            FormRequest.Create(new MultipartParam("file", request.File)),
            JsonResponse.Create<string>(),
            UploadApiSpecError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload Forge App attachment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Attachment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadAttachmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Attach a file to a component. If you need to have attachment upload enabled for your Compass Forge app, contact Atlassian support.
    /// <para>
    /// The request body should be a file.
    /// </para>
    /// <para>
    /// Example: This curl command attaches a file to a component.
    /// <code>
    /// curl --request PUT \
    /// --url 'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}' \
    /// --user 'email@example.com:' \
    /// --header 'Content-Type: multipart/form-data' \
    /// --form file=@/path/to/attachment.txt
    /// </code>
    /// </para>
    /// </remarks>
    public Task<Attachment> UploadAttachment(UploadAttachmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}"),
            [
                new TemplateParam("componentId", request.ComponentId),
                new TemplateParam("forgeAppId", request.ForgeAppId),
                new TemplateParam("key", request.Key),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            FormRequest.Create(new MultipartParam("file", request.File)),
            JsonResponse.Create<Attachment>(),
            UploadAttachmentError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
