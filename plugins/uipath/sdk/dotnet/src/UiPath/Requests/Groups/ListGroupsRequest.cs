namespace UiPath.Requests.Groups;

/// <summary>
/// The inputs of the ListGroups operation.
/// </summary>
public sealed record ListGroupsRequest
{
    /// <summary>
    /// The name of the UiPath organization
    /// </summary>
    public required string OrganizationName { get; init; }

    /// <summary>
    /// Global partition identifier for the organization or tenant scope
    /// </summary>
    public required string PartitionGlobalId { get; init; }
}
