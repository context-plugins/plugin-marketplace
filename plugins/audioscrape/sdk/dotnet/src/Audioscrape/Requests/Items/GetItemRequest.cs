namespace Audioscrape.Requests.Items;

/// <summary>
/// The inputs of the GetItem operation.
/// </summary>
public sealed record GetItemRequest
{
    /// <summary>
    /// Numeric item ID (works for any source_type)
    /// </summary>
    public required string ItemId { get; init; }

    /// <summary>
    /// Comma-separated optional fields: <c>transcript</c>, <c>entities</c>.
    /// </summary>
    public string? Include { get; init; }
}
