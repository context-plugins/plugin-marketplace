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
using FinixApiReference.Requests.AuthorizationsApi;

namespace FinixApiReference.Api;

/// <summary>
/// An <c>Authorization</c> (also known as a card hold) reserves a specific amount on a card to be captured (i.e. debited) at a later date, usually within seven days. When an <c>Authorization</c> is captured it produces a <c>Transfer</c> resource.
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/online-payments/payment-features/auth-and-captures">Auth and Captures</see>
/// - <see href="/guides/online-payments/payment-features/level-2-level-3-processing/">Level 2 and 3 Processing</see>
/// - <see href="/guides/in-person-payments/building-your-integration/pos-integration">POS Integration</see>
/// - <see href="/guides/online-payments/payment-features/buyer-charges/">Buyer Charges</see>
/// </para>
/// </summary>
public sealed class AuthorizationsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AuthorizationsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Capture an Authorization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Authorization"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CaptureAuthorizationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use a PUT request to capture an <c>Authorization</c>. If captured successfully, the <c>transfer</c> field of the <c>Authorization</c> will contain the ID of the <c>Transfer</c> resource that moves funds.
    /// <para>
    /// Related Guides: <see href="/guides/online-payments/payment-features/auth-and-captures/">Creating and Capturing an Authorization</see>, <see href="/guides/online-payments/payment-features/level-2-level-3-processing">Level 2 and 3 Processing</see>, <see href="/guides/in-person-payments/building-your-integration/pos-integration">POS Integration</see>, <see href="/guides/online-payments/payment-features/buyer-charges">Buyer Charges</see>
    /// </para>
    /// </remarks>
    public Task<Authorization> CaptureAuthorization(CaptureAuthorizationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/authorizations/{authorization_id}"),
            [new TemplateParam("authorization_id", request.AuthorizationId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Authorization>(),
            CaptureAuthorizationError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an Authorization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Authorization"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAuthorizationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an <c>Authorization</c> to process a transaction.
    /// <para>
    /// Related Guides: <see href="/guides/online-payments/payment-features/auth-and-captures/">Creating and Capturing an Authorization</see>, <see href="/guides/online-payments/payment-features/level-2-level-3-processing">Level 2 and 3 Processing</see>, <see href="/guides/in-person-payments/building-your-integration/pos-integration">POS Integration</see>, <see href="/guides/online-payments/payment-features/buyer-charges">Buyer Charges</see>
    /// </para>
    /// </remarks>
    public Task<Authorization> CreateAuthorization(CreateAuthorizationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/authorizations"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Authorization>(),
            CreateAuthorizationError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch an Authorization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Authorization"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAuthorizationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of a previously created <c>Authorization</c>.
    /// </remarks>
    public Task<Authorization> GetAuthorization(GetAuthorizationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/authorizations/{authorization_id}"),
            [new TemplateParam("authorization_id", request.AuthorizationId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Authorization>(),
            GetAuthorizationError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Authorizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListAuthorizations"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAuthorizationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Authorizations</c>.
    /// <para>
    /// For details on how to query endpoints using the available parameters, see <see href="/api/section/query-parameters">Query Parameters.</see>
    /// </para>
    /// <para>
    /// {% admonition type="info" %}
    /// If no query parameters are specified in the request the API automatically limits the response to records from the last 30 days. You can request older data by passing an explicit created_at.lte filter.
    /// {% /admonition %}
    /// </para>
    /// </remarks>
    public Task<ListAuthorizations> ListAuthorizations(ListAuthorizationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/authorizations"),
            [],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("amount.gt", request.AmountGt),
                new Param("amount.gte", request.AmountGte),
                new Param("amount.lt", request.AmountLt),
                new Param("amount.lte", request.AmountLte),
                new Param("amount", request.Amount),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("currency", request.Currency),
                new Param("device", request.Device),
                new Param("idempotency_id", request.IdempotencyId),
                new Param("instrument_account_last4", request.InstrumentAccountLast4),
                new Param("instrument_bin", request.InstrumentBin),
                new Param("instrument_brand_type", request.InstrumentBrandType),
                new Param("instrument_card_last4", request.InstrumentCardLast4),
                new Param("instrument_name", request.InstrumentName),
                new Param("is_void", request.IsVoid),
                new Param("limit", request.Limit),
                new Param("merchant", request.Merchant),
                new Param("merchant_identity_name", request.MerchantIdentityName),
                new Param("merchant_mid", request.MerchantMid),
                new Param("merchant_processor_id", request.MerchantProcessorId),
                new Param("state", request.State),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("trace_id", request.TraceId),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListAuthorizations>(),
            ListAuthorizationsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Void an Authorization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Authorization"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VoidAuthorizationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use a PUT request to void an <c>Authorization</c>. If voided successfully, funds get released, and the transaction is incomplete. Additionally, a voided <c>Authorization</c> can no longer be captured. Depending on the cardholder’s issuing bank, voids can take up to seven days to remove the <c>Authorization</c> hold.
    /// <para>
    /// Related Guides: <see href="/guides/online-payments/payment-features/auth-and-captures/">Creating and Capturing an Authorization</see>, <see href="/guides/online-payments/payment-features/level-2-level-3-processing">Level 2 and 3 Processing</see>, <see href="/guides/in-person-payments/building-your-integration/pos-integration">POS Integration</see>, <see href="/guides/online-payments/payment-features/buyer-charges">Buyer Charges</see>
    /// </para>
    /// </remarks>
    public Task<Authorization> VoidAuthorization(VoidAuthorizationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/authorizations/{authorization_id_void_to}"),
            [new TemplateParam("authorization_id_void_to", request.AuthorizationIdVoidTo)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Authorization>(),
            VoidAuthorizationError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
