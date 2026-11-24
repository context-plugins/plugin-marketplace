using System;

namespace Paid.Requests.PricingApi;

/// <summary>
/// The inputs of the GetPricing operation.
/// </summary>
public sealed record GetPricingRequest
{
    public required Guid ProductAttributeId { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
