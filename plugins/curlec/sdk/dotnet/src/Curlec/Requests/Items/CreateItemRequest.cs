using Curlec.Models;

namespace Curlec.Requests.Items;

/// <summary>
/// The inputs of the CreateItem operation.
/// </summary>
public sealed record CreateItemRequest
{
    public required ItemsRequest Body { get; init; }
}
