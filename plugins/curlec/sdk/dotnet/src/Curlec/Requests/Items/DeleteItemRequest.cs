namespace Curlec.Requests.Items;

/// <summary>
/// The inputs of the DeleteItem operation.
/// </summary>
public sealed record DeleteItemRequest
{
    /// <summary>
    /// Item ID (item_*).
    /// </summary>
    public required string Id { get; init; }
}
