using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DidLogic.Core;
using DidLogic.Core.Exceptions;
using DidLogic.Core.Extensions;
using DidLogic.Core.Models;
using DidLogic.Core.Request;
using DidLogic.Core.Response;
using DidLogic.Errors;
using DidLogic.Models;
using DidLogic.Requests.Identities;

namespace DidLogic.Api;

public sealed class Identities
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Identities(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create identity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2IdentitiesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IdentitiesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new identity for document organization.
    /// <para>
    /// <b>Required Fields:</b>
    /// - name - Identity name
    /// </para>
    /// <para>
    /// <c>identity.id</c> feeds documents_index, documents_create, documents_update, identities_destroy and
    /// numbers_purchase_update. Rows: identities_index.
    /// </para>
    /// </remarks>
    public Task<ApiV2IdentitiesResponse1> IdentitiesCreate(IdentitiesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/identities"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV2IdentitiesResponse1>(),
            IdentitiesCreateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive identity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2IdentitiesResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IdentitiesDestroyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an identity.
    /// <para>
    /// <b>Important notes:</b>
    /// - Identity is archived and becomes inactive
    /// - Cannot delete primary/default identity
    /// - Associated documents are preserved
    /// </para>
    /// </remarks>
    public Task<ApiV2IdentitiesResponse2> IdentitiesDestroy(IdentitiesDestroyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/identities/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2IdentitiesResponse2>(),
            IdentitiesDestroyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List identities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2IdentitiesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IdentitiesIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of identities with filtering and pagination.
    /// <para>
    /// <b>Important notes:</b>
    /// - Supports filtering by name, IDs, and date range
    /// - Results can be sorted and paginated
    /// </para>
    /// <para>
    /// <c>identities[].id</c> feeds documents_index, documents_create, documents_update, identities_destroy and
    /// numbers_purchase_update. When <c>documents_count</c> is above zero, documents_index lists those documents
    /// by <c>identity_id</c>.
    /// </para>
    /// </remarks>
    public Task<ApiV2IdentitiesResponse> IdentitiesIndex(IdentitiesIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/identities"),
            [],
            [
                new Param("ids", request.Ids),
                new Param("name", request.Name),
                new Param("created_at_from", request.CreatedAtFrom?.ToDate()),
                new Param("created_at_to", request.CreatedAtTo?.ToDate()),
                new Param("order_by", request.OrderBy),
                new Param("order", request.Order),
                new Param("page", request.Page),
                new Param("per_page", request.PerPage),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2IdentitiesResponse>(),
            IdentitiesIndexError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
