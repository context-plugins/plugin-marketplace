using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.MerchantsApi;

/// <summary>
/// The inputs of the UpdateMerchant operation.
/// </summary>
public sealed record UpdateMerchantRequest
{
    /// <summary>
    /// The <c>Merchant</c> ID.
    /// </summary>
    public required string MerchantId { get; init; }

    public required MerchantsRequest Body { get; init; }
}
