using Curlec.Models;

namespace Curlec.Requests.Items;

/// <summary>
/// The inputs of the UpdateItem operation.
/// </summary>
public sealed record UpdateItemRequest
{
    /// <summary>
    /// Item ID (item_*).
    /// </summary>
    public required string Id { get; init; }

    public required ItemsRequest1 Body { get; init; }
}
