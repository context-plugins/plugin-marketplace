using System;

namespace Basiq.Requests.EnrichApi;

/// <summary>
/// The inputs of the GetMerchantById operation.
/// </summary>
public sealed record GetMerchantByIdRequest
{
    /// <summary>
    /// The unique identifier of the merchant.
    /// </summary>
    public required Guid MerchantId { get; init; }
}
