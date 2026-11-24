namespace Fellow.Requests.ActionItems;

/// <summary>
/// The inputs of the AppsDeveloperApiApiArchiveActionItem operation.
/// </summary>
public sealed record AppsDeveloperApiApiArchiveActionItemRequest
{
    public required string ActionItemId { get; init; }
}
