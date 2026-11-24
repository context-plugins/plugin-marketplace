using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Skribble.Core;
using Skribble.Core.Exceptions;
using Skribble.Core.Models;
using Skribble.Core.Request;
using Skribble.Core.Response;
using Skribble.Errors;
using Skribble.Models.OneOf;
using Skribble.Requests.SignatureObserverApi;

namespace Skribble.Api;

/// <summary>
/// Endpoints for managing observers on a signature request.
/// </summary>
public sealed class SignatureObserverApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SignatureObserverApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add an observer to a signature request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignatureObserverResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddSignatureObserverError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds an observer to the specified signature request.
    /// <para>
    /// Observers receive email notifications about signing progress and can view
    /// documents, but cannot sign them.
    /// </para>
    /// <para>
    /// Adding a <b>group</b> observer requires the group-observers feature to be enabled
    /// for the business. If it is not, the request fails with <c>403 Forbidden</c>
    /// (problem type <c>feature-not-enabled</c>).
    /// </para>
    /// </remarks>
    public Task<SignatureObserverResponse> AddSignatureObserver(AddSignatureObserverRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/signature-requests/{SR_ID}/observers"),
            [new TemplateParam("SR_ID", request.SrId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SignatureObserverResponse>(),
            AddSignatureObserverError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove an observer from a signature request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSignatureObserverError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the observer identified by <c>OBSERVER_ID</c> from the <c>SignatureRequest</c>
    /// with the ID <c>SR_ID</c>.
    /// </remarks>
    public Task DeleteSignatureObserver(DeleteSignatureObserverRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/signature-requests/{SR_ID}/observers/{OBSERVER_ID}"),
            [new TemplateParam("SR_ID", request.SrId), new TemplateParam("OBSERVER_ID", request.ObserverId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteSignatureObserverError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an observer of a signature request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignatureObserverResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSignatureObserverError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the observer identified by <c>OBSERVER_ID</c> from the <c>SignatureRequest</c>
    /// with the ID <c>SR_ID</c>.
    /// </remarks>
    public Task<SignatureObserverResponse> GetSignatureObserver(GetSignatureObserverRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/signature-requests/{SR_ID}/observers/{OBSERVER_ID}"),
            [new TemplateParam("SR_ID", request.SrId), new TemplateParam("OBSERVER_ID", request.ObserverId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SignatureObserverResponse>(),
            GetSignatureObserverError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List observers of a signature request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="SignatureObserverResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSignatureObserversError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all observers added to the <c>SignatureRequest</c> with the ID <c>SR_ID</c>.
    /// </remarks>
    public Task<IReadOnlyList<SignatureObserverResponse>> ListSignatureObservers(ListSignatureObserversRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/signature-requests/{SR_ID}/observers"),
            [new TemplateParam("SR_ID", request.SrId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<SignatureObserverResponse>>(),
            ListSignatureObserversError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
