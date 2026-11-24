using Fellow.Models;

namespace Fellow.Requests.ActionItems;

/// <summary>
/// The inputs of the AppsDeveloperApiApiMarkActionItemComplete operation.
/// </summary>
public sealed record AppsDeveloperApiApiMarkActionItemCompleteRequest
{
    public required string ActionItemId { get; init; }

    public required MarkActionItemCompleteRequest Body { get; init; }
}
