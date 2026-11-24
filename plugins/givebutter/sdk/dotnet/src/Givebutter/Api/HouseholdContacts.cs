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
using Givebutter.Requests.HouseholdContacts;

namespace Givebutter.Api;

public sealed class HouseholdContacts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal HouseholdContacts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Remove a contact from a household
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AppHttpResourcesApiHouseholdResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HouseholdsContactsDestroyError"/> when the server returns an error response.</exception>
    public Task<AppHttpResourcesApiHouseholdResource> HouseholdsContactsDestroy(HouseholdsContactsDestroyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/households/{household}/contacts/{contact}"),
            [new TemplateParam("household", request.Household), new TemplateParam("contact", request.Contact)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<AppHttpResourcesApiHouseholdResource>(),
            HouseholdsContactsDestroyError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all contacts associated with a household
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1HouseholdsContactsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HouseholdsContactsIndexError"/> when the server returns an error response.</exception>
    public Task<V1HouseholdsContactsResponse> HouseholdsContactsIndex(HouseholdsContactsIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/households/{household}/contacts"),
            [new TemplateParam("household", request.Household)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1HouseholdsContactsResponse>(),
            HouseholdsContactsIndexError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a contact associated with a household
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HouseholdsContactsShowError"/> when the server returns an error response.</exception>
    public Task<ContactResource> HouseholdsContactsShow(HouseholdsContactsShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/households/{household}/contacts/{contact}"),
            [new TemplateParam("household", request.Household), new TemplateParam("contact", request.Contact)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ContactResource>(),
            HouseholdsContactsShowError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a contact to a household
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AppHttpResourcesApiHouseholdResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HouseholdsContactsStoreError"/> when the server returns an error response.</exception>
    public Task<AppHttpResourcesApiHouseholdResource> HouseholdsContactsStore(HouseholdsContactsStoreRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/households/{household}/contacts"),
            [new TemplateParam("household", request.Household)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AppHttpResourcesApiHouseholdResource>(),
            HouseholdsContactsStoreError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);
}
