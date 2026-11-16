using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Core;
using FinixApiReference.Core.Exceptions;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Request;
using FinixApiReference.Core.Response;
using FinixApiReference.Errors;
using FinixApiReference.Models;
using FinixApiReference.Requests.Identities;

namespace FinixApiReference.Api;

/// <summary>
/// An <c>Identity</c> resource represents either a person or business in Finix. You'll create an <c>Identity</c> to onboard your sellers, and verify the different owners.
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/getting-started">Getting Started</see>
/// - <see href="/guides/platform-payments/onboarding-sellers">Onboarding Sellers</see>
/// - <see href="/guides/payouts/card-payouts/">Push to Card</see>
/// </para>
/// </summary>
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
    /// Create an Associated Identity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Identity"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAssociatedIdentityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an associated <c>Identity</c> for <see href="/guides/platform-payments/onboarding-sellers/seller-onboarding-via-api#step-3-add-associated-identities">every owner with 25% or more ownership</see> over the merchant.
    /// </remarks>
    public Task<Identity> CreateAssociatedIdentity(CreateAssociatedIdentityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/identities/{identity_id}/associated_identities"),
            [new TemplateParam("identity_id", request.IdentityId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Identity>(),
            CreateAssociatedIdentityError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an Identity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Identity"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateIdentityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an <c>Identity</c> for your Buyer, Recipient, or Seller, using <c>identity_roles</c> and <c>type</c> to indicate the type of Identity you're creating.
    /// <para>
    /// Related Guides: <see href="/guides/getting-started/">Getting Started</see>, <see href="/guides/platform-payments/onboarding-sellers/">Onboarding</see>
    /// </para>
    /// </remarks>
    public Task<Identity> CreateIdentity(CreateIdentityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/identities"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Identity>(),
            CreateIdentityError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch an Identity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Identity"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIdentityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of a previously created <c>Identity</c>.
    /// </remarks>
    public Task<Identity> GetIdentity(GetIdentityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/identities/{identity_id}"),
            [new TemplateParam("identity_id", request.IdentityId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Identity>(),
            GetIdentityError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch an Identity's Merchant
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListMerchants"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIdentityMerchantError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the <c>Merchant</c> resource for an <c>Identity</c>.
    /// </remarks>
    public Task<ListMerchants> GetIdentityMerchant(GetIdentityMerchantRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/identities/{identity_id}/merchants"),
            [new TemplateParam("identity_id", request.IdentityId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListMerchants>(),
            GetIdentityMerchantError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Identities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListIdentities"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListIdentitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list the previously created <c>Identities</c>.
    /// <para>
    /// For details on how to query endpoints using the available parameters, see <see href="/api/section/query-parameters">Query Parameters</see>.
    /// </para>
    /// <para>
    /// {% admonition type="info" %}
    /// If no query parameters are specified in the request the API automatically limits the response to records from the last 30 days. You can request older data by passing an explicit created_at.lte filter.
    /// {% /admonition %}
    /// </para>
    /// </remarks>
    public Task<ListIdentities> ListIdentities(ListIdentitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/identities"),
            [],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("business_name", request.BusinessName),
                new Param("business_type", request.BusinessType),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("default_statement_descriptor", request.DefaultStatementDescriptor),
                new Param("email", request.Email),
                new Param("first_name", request.FirstName),
                new Param("id", request.Id),
                new Param("identity_role", request.IdentityRole),
                new Param("last_name", request.LastName),
                new Param("limit", request.Limit),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("title", request.Title),
                new Param("type", request.Type),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListIdentities>(),
            ListIdentitiesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Associated Identities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListIdentities"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListIdentityAssociatedIdentitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Associated Identities</c> for an <c>Identity</c>.
    /// <para>
    /// For details on how to query endpoints using the available parameters, see <see href="/api/section/query-parameters">Query Parameters.</see>
    /// </para>
    /// </remarks>
    public Task<ListIdentities> ListIdentityAssociatedIdentities(ListIdentityAssociatedIdentitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/identities/{identity_id}/associated_identities"),
            [new TemplateParam("identity_id", request.IdentityId)],
            [
                new Param("limit", request.Limit),
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListIdentities>(),
            ListIdentityAssociatedIdentitiesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an Identity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Identity"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateIdentityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing <c>Identity</c>.
    /// <para>
    /// If you are updating the <c>Identity</c> of a <c>Merchant</c> that’s already been onboarded, you need to <see href="#operation/createMerchantVerification">verify the merchant again</see>.
    /// </para>
    /// </remarks>
    public Task<Identity> UpdateIdentity(UpdateIdentityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/identities/{identity_id}"),
            [new TemplateParam("identity_id", request.IdentityId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Identity>(),
            UpdateIdentityError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
