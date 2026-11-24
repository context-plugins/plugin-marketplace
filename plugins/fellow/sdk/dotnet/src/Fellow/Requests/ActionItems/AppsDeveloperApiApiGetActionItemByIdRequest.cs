namespace Fellow.Requests.ActionItems;

/// <summary>
/// The inputs of the AppsDeveloperApiApiGetActionItemById operation.
/// </summary>
public sealed record AppsDeveloperApiApiGetActionItemByIdRequest
{
    public required string ActionItemId { get; init; }
}
