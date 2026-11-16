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
using FinixApiReference.Requests.MerchantsApi;

namespace FinixApiReference.Api;

/// <summary>
/// A <c>Merchant</c> resource represents the entity's merchant account on a processor. Your <c>Merchant</c> must be <c>APPROVED</c> to process payments.
/// <para>
/// <b>Related Guides:</b>
/// </para>
/// <list type="bullet">
///   <item><description><see href="/guides/getting-started">Getting Started</see></description></item>
///   <item><description><see href="/guides/platform-payments/onboarding-sellers">Onboarding Sellers</see></description></item>
/// </list>
/// </summary>
public sealed class MerchantsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MerchantsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Merchant
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MerchantSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateMerchantError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <c>Merchant</c> to start the underwriting (also called provisioning) process for your seller. <c>Merchants</c> must be created under an <see href="#Identities"><c>Identity</c></see>.
    /// <para>
    /// A bank account must be associated with the previously created <c>Identity</c> before a <c>Merchant</c> can be successfully onboarded and verified.
    /// </para>
    /// </remarks>
    public Task<MerchantSchema> CreateMerchant(CreateMerchantRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/identities/{identity_id}/merchants"),
            [new TemplateParam("identity_id", request.IdentityId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MerchantSchema>(),
            CreateMerchantError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Verify a Merchant
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MerchantVerification"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateMerchantVerificationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <c>Verification</c> on a Merchant to get them Approved. This request will create a new <c>PENDING</c> Verification. Listen to updates and re-fetch the Verification when it is <c>SUCCEEDED</c> or <c>FAILED</c>.
    /// <para>
    /// For handling <c>FAILED</c> Verifications, see <see href="/api/verifications/getverification">Fetch a Verification</see>. See also <see href="/guides/platform-payments/onboarding-sellers/seller-onboarding-process">Onboarding Process</see> for Seller Merchants and <see href="/guides/payouts/recipient-verification-process">Verification Requirements for Payouts</see> for Recipient Merchants.
    /// </para>
    /// </remarks>
    public Task<MerchantVerification> CreateMerchantVerification(CreateMerchantVerificationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/merchants/{merchant_id}/verifications"),
            [new TemplateParam("merchant_id", request.MerchantId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MerchantVerification>(),
            CreateMerchantVerificationError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Merchant
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MerchantSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMerchantError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of a <c>Merchant</c>.
    /// </remarks>
    public Task<MerchantSchema> GetMerchant(GetMerchantRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/merchants/{merchant_id}"),
            [new TemplateParam("merchant_id", request.MerchantId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MerchantSchema>(),
            GetMerchantError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Merchants
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListMerchants"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMerchantsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Merchant</c> resources.
    /// </remarks>
    public Task<ListMerchants> ListMerchants(ListMerchantsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/merchants"),
            [],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("application_id", request.ApplicationId),
                new Param("country", request.Country),
                new Param("currency", request.Currency),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("id", request.Id),
                new Param("identity_business_name", request.IdentityBusinessName),
                new Param("identity_business_name.like", request.IdentityBusinessNameLike),
                new Param("identity_doing_business_as", request.IdentityDoingBusinessAs),
                new Param("identity_doing_business_as.like", request.IdentityDoingBusinessAsLike),
                new Param("identity_first_name", request.IdentityFirstName),
                new Param("identity_first_name.like", request.IdentityFirstNameLike),
                new Param("identity_id", request.IdentityId),
                new Param("identity_last_name", request.IdentityLastName),
                new Param("identity_last_name.like", request.IdentityLastNameLike),
                new Param("identity_role", request.IdentityRole),
                new Param("mcc", request.Mcc),
                new Param("merchant_name", request.MerchantName),
                new Param("merchant_name.like", request.MerchantNameLike),
                new Param("processing_enabled", request.ProcessingEnabled),
                new Param("processor_type", request.ProcessorType),
                new Param("settlement_enabled", request.SettlementEnabled),
                new Param("limit", request.Limit),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
                new Param("verification_id", request.VerificationId),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListMerchants>(),
            ListMerchantsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Merchant
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MerchantSchema"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateMerchantError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a <c>Merchant</c> to:
    /// - Change the <c>Identity</c> information saved with the underlying processor
    /// - <see href="/guides/online-payments/payment-features/level-2-level-3-processing">Enable Level 2/3 processing</see>
    /// - Enable <see href="/guides/online-payments/payment-features/buyer-charges">Buyer Charges</see>
    /// - Enable partial authorizations
    /// - Disable a <c>Merchant</c> so the seller can't create new <c>Transfers</c> and <c>Authorizations</c>
    /// - Disable a <c>Merchant</c> so their <c>Settlements</c> cannot be approved.
    /// - Enable a <c>Merchant</c> to use the Settlement Queue
    /// - Terminate a <c>Merchant</c> for suspected fraud, compliance violations, excessive chargebacks, or merchant churn.
    /// </remarks>
    public Task<MerchantSchema> UpdateMerchant(UpdateMerchantRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/merchants/{merchant_id}"),
            [new TemplateParam("merchant_id", request.MerchantId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MerchantSchema>(),
            UpdateMerchantError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
