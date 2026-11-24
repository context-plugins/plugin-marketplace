using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Givebutter.Core;
using Givebutter.Core.Exceptions;
using Givebutter.Core.Models;
using Givebutter.Core.Request;
using Givebutter.Core.Response;
using Givebutter.Errors;
using Givebutter.Models;
using Givebutter.Requests.ContactActivities;

namespace Givebutter.Api;

public sealed class ContactActivities
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ContactActivities(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a contact activity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContactsActivitiesDestroyError"/> when the server returns an error response.</exception>
    public Task ContactsActivitiesDestroy(ContactsActivitiesDestroyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/contacts/{contact}/activities/{activity}"),
            [new TemplateParam("contact", request.Contact), new TemplateParam("activity", request.Activity)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ContactsActivitiesDestroyError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all contact activities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ContactsActivitiesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContactsActivitiesIndexError"/> when the server returns an error response.</exception>
    public Task<V1ContactsActivitiesResponse> ContactsActivitiesIndex(ContactsActivitiesIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/contacts/{contact}/activities"),
            [new TemplateParam("contact", request.Contact)],
            [new Param("type", request.Type)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ContactsActivitiesResponse>(),
            ContactsActivitiesIndexError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a contact activity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactActivityResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContactsActivitiesShowError"/> when the server returns an error response.</exception>
    public Task<ContactActivityResource> ContactsActivitiesShow(ContactsActivitiesShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/contacts/{contact}/activities/{activity}"),
            [new TemplateParam("contact", request.Contact), new TemplateParam("activity", request.Activity)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ContactActivityResource>(),
            ContactsActivitiesShowError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a contact activity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactActivityResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContactsActivitiesStoreError"/> when the server returns an error response.</exception>
    public Task<ContactActivityResource> ContactsActivitiesStore(ContactsActivitiesStoreRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/contacts/{contact}/activities"),
            [new TemplateParam("contact", request.Contact)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ContactActivityResource>(),
            ContactsActivitiesStoreError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a contact activity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactActivityResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContactsActivitiesUpdateError"/> when the server returns an error response.</exception>
    public Task<ContactActivityResource> ContactsActivitiesUpdate(ContactsActivitiesUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/contacts/{contact}/activities/{activity}"),
            [new TemplateParam("contact", request.Contact), new TemplateParam("activity", request.Activity)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<ContactActivityResource>(),
            ContactsActivitiesUpdateError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);
}
