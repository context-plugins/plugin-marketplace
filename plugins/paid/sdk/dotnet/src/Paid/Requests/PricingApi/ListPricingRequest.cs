namespace Paid.Requests.PricingApi;

/// <summary>
/// The inputs of the ListPricing operation.
/// </summary>
public sealed record ListPricingRequest
{
    /// <summary>
    /// Product display ID or UUID
    /// </summary>
    public required string ProductId { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
