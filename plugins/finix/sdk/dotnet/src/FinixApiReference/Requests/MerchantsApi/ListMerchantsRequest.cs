using System;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Requests.MerchantsApi;

/// <summary>
/// The inputs of the ListMerchants operation.
/// </summary>
public sealed record ListMerchantsRequest
{
    /// <summary>
    /// Return every resource created after the cursor value.
    /// </summary>
    public string? AfterCursor { get; init; }

    /// <summary>
    /// Return every resource created before the cursor value.
    /// </summary>
    public string? BeforeCursor { get; init; }

    /// <summary>
    /// Filter by <c>Application</c> ID.
    /// </summary>
    public string? ApplicationId { get; init; }

    /// <summary>
    /// Filter by the Merchant's <c>country</c> (ISO 3166 alpha-3).
    /// </summary>
    public Country2? Country { get; init; }

    /// <summary>
    /// Filter by the Merchant's <c>currencies</c> (ISO 4217).
    /// </summary>
    public Currency14? Currency { get; init; }

    /// <summary>
    /// Filter where <c>created_at</c> is after the given date.
    /// </summary>
    public DateTimeOffset? CreatedAtGte { get; init; }

    /// <summary>
    /// Filter where <c>created_at</c> is before the given date.
    /// </summary>
    public DateTimeOffset? CreatedAtLte { get; init; }

    /// <summary>
    /// Filter by <c>id</c>.
    /// </summary>
    public string? Id { get; init; }

    /// <summary>
    /// Filter by the <c>business_name</c> of the Merchant's <c>identity</c> (exact match).
    /// </summary>
    public string? IdentityBusinessName { get; init; }

    /// <summary>
    /// Filter by the <c>business_name</c> of the Merchant's <c>identity</c> (partial match).
    /// </summary>
    public string? IdentityBusinessNameLike { get; init; }

    /// <summary>
    /// Filter by the <c>doing_business_as</c> of the Merchant's <c>identity</c> (exact match).
    /// </summary>
    public string? IdentityDoingBusinessAs { get; init; }

    /// <summary>
    /// Filter by the <c>doing_business_as</c> of the Merchant's <c>identity</c> (partial match).
    /// </summary>
    public string? IdentityDoingBusinessAsLike { get; init; }

    /// <summary>
    /// Filter by the <c>first_name</c> of the Merchant's <c>identity</c> (exact match).
    /// </summary>
    public string? IdentityFirstName { get; init; }

    /// <summary>
    /// Filter by the <c>first_name</c> of the Merchant's <c>identity</c> (partial match).
    /// </summary>
    public string? IdentityFirstNameLike { get; init; }

    /// <summary>
    /// Filter by the Merchant's <c>identity</c>.
    /// </summary>
    public string? IdentityId { get; init; }

    /// <summary>
    /// Filter by the <c>last_name</c> of the Merchant's <c>identity</c> (exact match).
    /// </summary>
    public string? IdentityLastName { get; init; }

    /// <summary>
    /// Filter by the <c>last_name</c> of the Merchant's <c>identity</c> (partial match).
    /// </summary>
    public string? IdentityLastNameLike { get; init; }

    /// <summary>
    /// Filter by the <c>identity_roles</c> of the Merchant's <c>identity</c>.
    /// </summary>
    public IdentityRole9? IdentityRole { get; init; }

    /// <summary>
    /// Filter by the Merchant's <c>mcc</c>.
    /// </summary>
    public string? Mcc { get; init; }

    /// <summary>
    /// Filter by the Merchant's <c>merchant_name</c> (exact match).
    /// </summary>
    public string? MerchantName { get; init; }

    /// <summary>
    /// Filter by the Merchant's <c>merchant_name</c> (partial match).
    /// </summary>
    public string? MerchantNameLike { get; init; }

    /// <summary>
    /// Filter by whether the Merchant's processing is enabled (<c>processing_enabled</c>).
    /// </summary>
    public bool? ProcessingEnabled { get; init; }

    /// <summary>
    /// Filter by the Merchant's <c>processor</c>.
    /// </summary>
    public ProcessorType? ProcessorType { get; init; }

    /// <summary>
    /// Filter by whether the Merchant's settlements are enabled (<c>settlement_enabled</c>).
    /// </summary>
    public bool? SettlementEnabled { get; init; }

    /// <summary>
    /// The numbers of items to return.
    /// </summary>
    [Maximum(100)]
    public int? Limit { get; init; }

    /// <summary>
    /// Filter where <c>updated_at</c> is after the given date.
    /// </summary>
    public DateTimeOffset? UpdatedAtGte { get; init; }

    /// <summary>
    /// Filter where <c>updated_at</c> is before the given date.
    /// </summary>
    public DateTimeOffset? UpdatedAtLte { get; init; }

    /// <summary>
    /// Filter by the Merchant's <c>verification</c>.
    /// </summary>
    public string? VerificationId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
