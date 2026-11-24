namespace Unbounce.Requests.PageGroups;

/// <summary>
/// The inputs of the ListPagesForPageGroup operation.
/// </summary>
public sealed record ListPagesForPageGroupRequest
{
    public required string PageGroupId { get; init; }
}
