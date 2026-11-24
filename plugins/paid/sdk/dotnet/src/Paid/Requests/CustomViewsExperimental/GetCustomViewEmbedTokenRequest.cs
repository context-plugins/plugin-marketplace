namespace Paid.Requests.CustomViewsExperimental;

/// <summary>
/// The inputs of the GetCustomViewEmbedToken operation.
/// </summary>
public sealed record GetCustomViewEmbedTokenRequest
{
    public required string DisplayId { get; init; }

    /// <summary>
    /// The customer to scope the view to: external id, Paid display id (cus_…), or internal id.
    /// </summary>
    public required string CustomerId { get; init; }

    /// <summary>
    /// Token lifetime in seconds (capped at 3600).
    /// </summary>
    public int? TtlSeconds { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
