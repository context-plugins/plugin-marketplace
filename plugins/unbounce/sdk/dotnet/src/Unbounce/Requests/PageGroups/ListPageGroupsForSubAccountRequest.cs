namespace Unbounce.Requests.PageGroups;

/// <summary>
/// The inputs of the ListPageGroupsForSubAccount operation.
/// </summary>
public sealed record ListPageGroupsForSubAccountRequest
{
    public required string SubAccountId { get; init; }
}
