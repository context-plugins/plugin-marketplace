namespace Contentstack.Requests.ScimGroups;

/// <summary>
/// The inputs of the DeleteScimGroup operation.
/// </summary>
public sealed record DeleteScimGroupRequest
{
    /// <summary>
    /// The unique identifier of the Contentstack organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    /// <summary>
    /// The SCIM group ID of the group within the organization.
    /// </summary>
    public required string GroupId { get; init; }
}
