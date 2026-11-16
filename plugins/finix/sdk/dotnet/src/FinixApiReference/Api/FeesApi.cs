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
using FinixApiReference.Requests.FeesApi;

namespace FinixApiReference.Api;

/// <summary>
/// A <c>Fee</c> is a charge levied against a <c>Merchant</c>. It represents how a platform charges its sellers for all various types of Fees.
/// </summary>
public sealed class FeesApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal FeesApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Custom Fee
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Fee"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatefeeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a custom (i.e. one-time) <c>Fee</c>.
    /// </remarks>
    public Task<Fee> Createfee(CreatefeeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/fees"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Fee>(),
            CreatefeeError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Fee
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Fee"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFeeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of an existing <c>Fee</c>.
    /// </remarks>
    public Task<Fee> GetFee(GetFeeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/fees/{fee_id}"),
            [new TemplateParam("fee_id", request.FeeId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Fee>(),
            GetFeeError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Fees
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListFees"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFeesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Fee</c> resources.
    /// <para>
    /// <b>Filter fees by linked entity</b>: You can filter fees by the entity that generated them using the <c>linked_to</c> query parameter:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Transfer fees: <c>?linked_to=TRnErBfrHLgdAi3BqAkWLN27</c></description></item>
    ///   <item><description>Authorization fees: <c>?linked_to=AUg8unYpnWBEY1AdVUDkdQYJ</c></description></item>
    ///   <item><description>Split transfer fees: <c>?linked_to=split_transfer_split_transfer_97gaitUpcmzqjYYpQbei9j</c></description></item>
    ///   <item><description>Compliance Form fees: <c>?linked_to=cf_uwErNm23TKYNEiqrEdJK59</c></description></item>
    ///   <item><description>Payment Instrument fees: <c>?linked_to=PInVUXZLswZi6pdcK1T41MuE</c></description></item>
    ///   <item><description>Merchant-specific fees: <c>?linked_to=MUwfZPNW3r4EqLMzwgr6txw4</c></description></item>
    /// </list>
    /// <para>
    /// {% admonition type="info" %}
    /// Merchant-specific fees include monthly dues and assessments and any <see href="/api/fees/createfee">custom fees</see>.
    /// {% /admonition %}
    /// </para>
    /// <para>
    /// <b>To show fees charged to a specific entity during a period</b>, pass the <c>created_at.gte</c> and <c>created_at.lte</c> query parameters.
    /// - Example: <c>?merchant_id=MUeDVrf2ahuKc9Eg5TeZugvs&amp;created_at.lte=2025-01-01&amp;created_at.gte=2025-02-01</c>
    /// </para>
    /// </remarks>
    public Task<ListFees> ListFees(ListFeesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/fees"),
            [],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("linked_to", request.LinkedTo),
                new Param("merchant_id", request.MerchantId),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListFees>(),
            ListFeesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Fee
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Fee"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateFeeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the details of a <c>Fee</c>.
    /// </remarks>
    public Task<Fee> UpdateFee(UpdateFeeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/fees/{fee_id}"),
            [new TemplateParam("fee_id", request.FeeId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Fee>(),
            UpdateFeeError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
