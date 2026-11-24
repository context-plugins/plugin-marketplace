namespace Paid.Requests.Checkouts;

/// <summary>
/// The inputs of the ArchiveCheckout operation.
/// </summary>
public sealed record ArchiveCheckoutRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
