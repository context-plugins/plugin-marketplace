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
using FinixApiReference.Models.AnyOf;
using FinixApiReference.Requests.VerificationsApi;

namespace FinixApiReference.Api;

/// <summary>
/// <c>Verifications</c> are used to verify <see href="/api/merchants">Merchants</see> and <see href="/api/payment-instruments">Payment Instruments</see>.
/// <para>
/// For <c>Merchants</c>, a verification represents an attempt to onboard and underwrite a Merchant.
/// </para>
/// <para>
/// For <c>Payment Instruments</c>, a verification represents getting additional information from the card brands to verify a card is eligible for push to card.
/// </para>
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/platform-payments/onboarding-sellers/seller-onboarding-via-api">Onboarding with the API</see>
/// - <see href="/guides/payouts/card-payouts">Push to Card</see>
/// </para>
/// </summary>
public sealed class VerificationsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal VerificationsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Fetch a Verification
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VerificationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVerificationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of an existing <c>Verification</c>.
    /// </remarks>
    public Task<VerificationsResponse> GetVerification(GetVerificationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/verifications/{verification_id}"),
            [new TemplateParam("verification_id", request.VerificationId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VerificationsResponse>(),
            GetVerificationError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Merchant Verifications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListMerchantVerifications"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMerchantVerificationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of all the <c>Verifications</c> for a <c>Merchant</c> resource.
    /// <para>
    /// For details on how to query endpoints using the available parameters, see <see href="/api/section/query-parameters">Query Parameters</see>.
    /// </para>
    /// </remarks>
    public Task<ListMerchantVerifications> ListMerchantVerifications(ListMerchantVerificationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/merchants/{merchant_id}/verifications"),
            [new TemplateParam("merchant_id", request.MerchantId)],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("limit", request.Limit),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListMerchantVerifications>(),
            ListMerchantVerificationsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Verifications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListVerifications"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListVerificationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Verification</c> resources.
    /// </remarks>
    public Task<ListVerifications> ListVerifications(ListVerificationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/verifications"),
            [],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListVerifications>(),
            ListVerificationsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
