using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Asana.Core;
using Asana.Core.Authentication;
using Asana.Core.Exceptions;
using Asana.Core.Models;
using Asana.Core.Request;
using Asana.Core.Response;
using Asana.Errors;
using Asana.Models;
using Asana.Requests.Attachments;

namespace Asana.Api;

/// <summary>
/// An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.
/// </summary>
public sealed class Attachments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Attachments(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Upload an attachment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AttachmentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAttachmentForObjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload an attachment.
    /// <para>
    /// This method uploads an attachment on an object and returns the compact
    /// record for the created attachment object. This is possible by either:
    /// </para>
    /// <para>
    /// - Providing the URL of the external resource being attached, or
    /// - Downloading the file content first and then uploading it as any other attachment. Note that it is not possible to attach
    /// files from third party services such as Dropbox, Box, Vimeo &amp; Google Drive via the API
    /// </para>
    /// <para>
    /// The 100MB size limit on attachments in Asana is enforced on this endpoint.
    /// </para>
    /// <para>
    /// This endpoint expects a multipart/form-data encoded request containing the full contents of the file to be uploaded.
    /// </para>
    /// <para>
    /// Requests made should follow the HTTP/1.1 specification that line
    /// terminators are of the form <c>CRLF</c> or <c>\r\n</c> outlined
    /// here in order for the server to reliably and properly handle the request.
    /// </para>
    /// </remarks>
    public Task<AttachmentsResponse> CreateAttachmentForObject(CreateAttachmentForObjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/attachments"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("resource_subtype", request.ResourceSubtype),
                new MultipartParam("file", request.File),
                new MultipartParam("parent", request.Parent),
                new MultipartParam("url", request.Url),
                new MultipartParam("name", request.Name),
                new MultipartParam("connect_to_app", request.ConnectToApp)),
            JsonResponse.Create<AttachmentsResponse>(),
            CreateAttachmentForObjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an attachment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AttachmentsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAttachmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a specific, existing attachment.
    /// <para>
    /// Returns an empty data record.
    /// </para>
    /// </remarks>
    public Task<AttachmentsResponse1> DeleteAttachment(DeleteAttachmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/attachments/{attachment_gid}"),
            [new TemplateParam("attachment_gid", request.AttachmentGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<AttachmentsResponse1>(),
            DeleteAttachmentError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an attachment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AttachmentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAttachmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the full record for a single attachment.
    /// </remarks>
    public Task<AttachmentsResponse> GetAttachment(GetAttachmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/attachments/{attachment_gid}"),
            [new TemplateParam("attachment_gid", request.AttachmentGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AttachmentsResponse>(),
            GetAttachmentError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get attachments from an object
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AttachmentsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAttachmentsForObjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact records for all attachments on the object.
    /// <para>
    /// There are three possible <c>parent</c> values for this request: <c>project</c>, <c>project_brief</c>, and <c>task</c>. For a project, an attachment refers to a file uploaded to the "Key resources" section in the project Overview. For a project brief, an attachment refers to inline files in the project brief itself. For a task, an attachment refers to a file directly associated to that task.
    /// </para>
    /// </remarks>
    public Task<AttachmentsResponse2> GetAttachmentsForObject(GetAttachmentsForObjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/attachments"),
            [],
            [
                new Param("parent", request.Parent),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AttachmentsResponse2>(),
            GetAttachmentsForObjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
