namespace Curlec.Requests.Items;

/// <summary>
/// The inputs of the FetchItem operation.
/// </summary>
public sealed record FetchItemRequest
{
    /// <summary>
    /// Item ID (item_*).
    /// </summary>
    public required string Id { get; init; }
}
