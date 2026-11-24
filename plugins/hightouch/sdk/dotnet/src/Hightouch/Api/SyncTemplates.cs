using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hightouch.Core;
using Hightouch.Core.Exceptions;
using Hightouch.Core.Models;
using Hightouch.Core.Request;
using Hightouch.Core.Response;
using Hightouch.Errors;
using Hightouch.Models;
using Hightouch.Models.AnyOf;
using Hightouch.Requests.SyncTemplates;

namespace Hightouch.Api;

public sealed class SyncTemplates
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SyncTemplates(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Sync Template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncTemplatesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSyncTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new sync template
    /// <para>
    /// A sync template holds a destination configuration that syncs created from
    /// it share. <c>overrideConfig</c> names the configuration fields those syncs may
    /// set for themselves; every other field is locked to the template's value.
    /// Create a sync from the template with <c>POST /syncs</c> and <c>syncTemplateId</c>.
    /// </para>
    /// </remarks>
    public Task<SyncTemplatesResponse1> CreateSyncTemplate(CreateSyncTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sync-templates"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SyncTemplatesResponse1>(),
            CreateSyncTemplateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Sync Template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncTemplate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSyncTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a sync template given its ID
    /// </remarks>
    public Task<SyncTemplate> GetSyncTemplate(GetSyncTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sync-templates/{syncTemplateId}"),
            [new TemplateParam("syncTemplateId", request.SyncTemplateId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SyncTemplate>(),
            GetSyncTemplateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Sync Templates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncTemplatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSyncTemplatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all the sync templates in the current workspace
    /// </remarks>
    public Task<SyncTemplatesResponse> ListSyncTemplates(ListSyncTemplatesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sync-templates"),
            [],
            [
                new Param("name", request.Name),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
                new Param("orderBy", request.OrderBy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SyncTemplatesResponse>(),
            ListSyncTemplatesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Sync Template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncTemplatesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSyncTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing sync template
    /// <para>
    /// Patch a sync template based on its Hightouch ID. The <c>destinationId</c> of a
    /// sync template cannot be changed after creation. Syncs created from the
    /// template pick up a new <c>configuration</c> on their next run; a new
    /// <c>overrideConfig</c> replaces the previous one and applies to the next write
    /// of each sync's <c>syncTemplateOverrides</c>.
    /// </para>
    /// </remarks>
    public Task<SyncTemplatesResponse1> UpdateSyncTemplate(UpdateSyncTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sync-templates/{syncTemplateId}"),
            [new TemplateParam("syncTemplateId", request.SyncTemplateId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SyncTemplatesResponse1>(),
            UpdateSyncTemplateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
