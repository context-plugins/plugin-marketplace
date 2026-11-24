namespace UiPath.Requests.Groups;

/// <summary>
/// The inputs of the GetGroup operation.
/// </summary>
public sealed record GetGroupRequest
{
    /// <summary>
    /// The name of the UiPath organization
    /// </summary>
    public required string OrganizationName { get; init; }

    /// <summary>
    /// Global partition identifier for the organization or tenant scope
    /// </summary>
    public required string PartitionGlobalId { get; init; }

    /// <summary>
    /// Unique identifier of the group
    /// </summary>
    public required string GroupId { get; init; }
}
