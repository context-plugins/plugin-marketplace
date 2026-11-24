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
using Shortcut.Requests.Labels;

namespace Shortcut.Api;

public sealed class Labels
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Labels(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Label
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Label"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateLabelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create Label allows you to create a new Label in Shortcut.
    /// </remarks>
    public Task<Label> CreateLabel(CreateLabelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/labels"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Label>(),
            CreateLabelError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Label
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteLabelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete Label can be used to delete any Label.
    /// </remarks>
    public Task DeleteLabel(DeleteLabelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/labels/{label-public-id}"),
            [new TemplateParam("label-public-id", request.LabelPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteLabelError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Label
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Label"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetLabelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Label returns information about the selected Label.
    /// </remarks>
    public Task<Label> GetLabel(GetLabelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/labels/{label-public-id}"),
            [new TemplateParam("label-public-id", request.LabelPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Label>(),
            GetLabelError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Label Epics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="EpicSlim"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListLabelEpicsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all of the Epics with the Label.
    /// </remarks>
    public Task<IReadOnlyList<EpicSlim>> ListLabelEpics(ListLabelEpicsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/labels/{label-public-id}/epics"),
            [new TemplateParam("label-public-id", request.LabelPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<EpicSlim>>(),
            ListLabelEpicsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Label Stories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="StorySlim"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListLabelStoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all of the Stories with the Label.
    /// </remarks>
    public Task<IReadOnlyList<StorySlim>> ListLabelStories(ListLabelStoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/labels/{label-public-id}/stories"),
            [new TemplateParam("label-public-id", request.LabelPublicId)],
            [new Param("includes_description", request.IncludesDescription)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<StorySlim>>(),
            ListLabelStoriesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Labels
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Label"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListLabelsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Labels returns a list of all Labels and their attributes.
    /// </remarks>
    public Task<IReadOnlyList<Label>> ListLabels(ListLabelsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/labels"),
            [],
            [new Param("slim", request.Slim)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Label>>(),
            ListLabelsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Label
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Label"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateLabelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update Label allows you to replace a Label name with another name. If you try to name a Label something that already exists, you will receive a 422 response.
    /// </remarks>
    public Task<Label> UpdateLabel(UpdateLabelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/labels/{label-public-id}"),
            [new TemplateParam("label-public-id", request.LabelPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Label>(),
            UpdateLabelError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
