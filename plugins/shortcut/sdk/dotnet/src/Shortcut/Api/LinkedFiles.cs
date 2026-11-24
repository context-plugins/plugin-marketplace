using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Shortcut.Core;
using Shortcut.Core.Exceptions;
using Shortcut.Core.Models;
using Shortcut.Core.Request;
using Shortcut.Core.Response;
using Shortcut.Errors;
using Shortcut.Models;
using Shortcut.Requests.LinkedFiles;

namespace Shortcut.Api;

public sealed class LinkedFiles
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal LinkedFiles(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Linked File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LinkedFile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateLinkedFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create Linked File allows you to create a new Linked File in Shortcut.
    /// </remarks>
    public Task<LinkedFile> CreateLinkedFile(CreateLinkedFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/linked-files"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<LinkedFile>(),
            CreateLinkedFileError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Linked File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteLinkedFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete Linked File can be used to delete any previously attached Linked-File.
    /// </remarks>
    public Task DeleteLinkedFile(DeleteLinkedFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/linked-files/{linked-file-public-id}"),
            [new TemplateParam("linked-file-public-id", request.LinkedFilePublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteLinkedFileError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Linked File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LinkedFile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetLinkedFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get File returns information about the selected Linked File.
    /// </remarks>
    public Task<LinkedFile> GetLinkedFile(GetLinkedFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/linked-files/{linked-file-public-id}"),
            [new TemplateParam("linked-file-public-id", request.LinkedFilePublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<LinkedFile>(),
            GetLinkedFileError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Linked Files
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="LinkedFile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListLinkedFilesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Linked Files returns a list of all Linked-Files and their attributes.
    /// </remarks>
    public Task<IReadOnlyList<LinkedFile>> ListLinkedFiles(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/linked-files"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<LinkedFile>>(),
            ListLinkedFilesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Linked File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LinkedFile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateLinkedFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updated Linked File allows you to update properties of a previously attached Linked-File.
    /// </remarks>
    public Task<LinkedFile> UpdateLinkedFile(UpdateLinkedFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/linked-files/{linked-file-public-id}"),
            [new TemplateParam("linked-file-public-id", request.LinkedFilePublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<LinkedFile>(),
            UpdateLinkedFileError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
