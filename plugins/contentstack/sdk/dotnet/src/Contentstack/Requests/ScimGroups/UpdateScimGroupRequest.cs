using Contentstack.Models;

namespace Contentstack.Requests.ScimGroups;

/// <summary>
/// The inputs of the UpdateScimGroup operation.
/// </summary>
public sealed record UpdateScimGroupRequest
{
    /// <summary>
    /// The unique identifier of the Contentstack organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    /// <summary>
    /// The SCIM group ID of the group within the organization.
    /// </summary>
    public required string GroupId { get; init; }

    public required ScimPatchRequest Body { get; init; }
}
