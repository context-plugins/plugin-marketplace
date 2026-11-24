using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Givebutter.Core;
using Givebutter.Core.Exceptions;
using Givebutter.Core.Extensions;
using Givebutter.Core.Models;
using Givebutter.Core.Request;
using Givebutter.Core.Response;
using Givebutter.Errors;
using Givebutter.Models;
using Givebutter.Requests.Contacts;

namespace Givebutter.Api;

public sealed class Contacts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Contacts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Restore a contact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContactRestoreError"/> when the server returns an error response.</exception>
    public Task<ContactResource> ContactRestore(ContactRestoreRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/contacts/{contact}/restore"),
            [new TemplateParam("contact", request.Contact)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            EmptyBody.Instance,
            JsonResponse.Create<ContactResource>(),
            ContactRestoreError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a contact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContactsDestroyError"/> when the server returns an error response.</exception>
    public Task ContactsDestroy(ContactsDestroyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/contacts/{contact}"),
            [new TemplateParam("contact", request.Contact)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ContactsDestroyError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all contacts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ContactsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContactsIndexError"/> when the server returns an error response.</exception>
    public Task<V1ContactsResponse> ContactsIndex(ContactsIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/contacts"),
            [],
            [
                new Param("type", request.Type),
                new Param("createdAfter", request.CreatedAfter?.ToIso8601()),
                new Param("createdBefore", request.CreatedBefore?.ToIso8601()),
                new Param("updatedAfter", request.UpdatedAfter?.ToIso8601()),
                new Param("updatedBefore", request.UpdatedBefore?.ToIso8601()),
                new Param("totalContributionsMin", request.TotalContributionsMin),
                new Param("totalContributionsMax", request.TotalContributionsMax),
                new Param("recurringContributionsMin", request.RecurringContributionsMin),
                new Param("recurringContributionsMax", request.RecurringContributionsMax),
                new Param("tags", request.Tags),
                new Param("sortBy", request.SortBy),
                new Param("sortByDesc", request.SortByDesc),
                new Param("email", request.Email),
                new Param("primaryEmail", request.PrimaryEmail),
                new Param("firstName", request.FirstName),
                new Param("lastName", request.LastName),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ContactsResponse>(),
            ContactsIndexError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a contact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContactsShowError"/> when the server returns an error response.</exception>
    public Task<ContactResource> ContactsShow(ContactsShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/contacts/{contact}"),
            [new TemplateParam("contact", request.Contact)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ContactResource>(),
            ContactsShowError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a contact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContactsStoreError"/> when the server returns an error response.</exception>
    public Task<ContactResource> ContactsStore(ContactsStoreRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/contacts"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ContactResource>(),
            ContactsStoreError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a contact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ContactsUpdateError"/> when the server returns an error response.</exception>
    public Task<ContactResource> ContactsUpdate(ContactsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/contacts/{contact}"),
            [new TemplateParam("contact", request.Contact)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ContactResource>(),
            ContactsUpdateError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);
}
