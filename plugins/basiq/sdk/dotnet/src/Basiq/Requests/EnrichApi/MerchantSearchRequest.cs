namespace Basiq.Requests.EnrichApi;

/// <summary>
/// The inputs of the MerchantSearch operation.
/// </summary>
public sealed record MerchantSearchRequest
{
    /// <summary>
    /// The Australian Business Number (ABN) of the merchant. Required if <c>merchantName</c> is not provided.
    /// </summary>
    public string? Abn { get; init; }

    /// <summary>
    /// The name of the merchant. Required if <c>abn</c> is not provided.
    /// </summary>
    public string? MerchantName { get; init; }

    /// <summary>
    /// The suburb of the merchant location to filter by.
    /// </summary>
    public string? Suburb { get; init; }

    /// <summary>
    /// The type of the merchant entity to filter by.
    /// </summary>
    public string? EntityType { get; init; }
}
