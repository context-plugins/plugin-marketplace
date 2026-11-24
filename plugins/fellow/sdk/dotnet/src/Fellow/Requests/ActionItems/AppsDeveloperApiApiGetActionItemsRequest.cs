using Fellow.Models;

namespace Fellow.Requests.ActionItems;

/// <summary>
/// The inputs of the AppsDeveloperApiApiGetActionItems operation.
/// </summary>
public sealed record AppsDeveloperApiApiGetActionItemsRequest
{
    public required GetActionItemsRequest Body { get; init; }
}
