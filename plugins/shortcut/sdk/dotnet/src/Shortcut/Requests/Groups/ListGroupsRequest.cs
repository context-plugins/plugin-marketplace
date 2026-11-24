namespace Shortcut.Requests.Groups;

/// <summary>
/// The inputs of the ListGroups operation.
/// </summary>
public sealed record ListGroupsRequest
{
    /// <summary>
    /// Filter groups by their archived state. If true, returns only archived groups. If false, returns only unarchived groups. If not provided, returns all groups
    /// </summary>
    public bool? Archived { get; init; }
}
