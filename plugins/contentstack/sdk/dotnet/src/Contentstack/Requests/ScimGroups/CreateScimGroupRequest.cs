using Contentstack.Models;

namespace Contentstack.Requests.ScimGroups;

/// <summary>
/// The inputs of the CreateScimGroup operation.
/// </summary>
public sealed record CreateScimGroupRequest
{
    /// <summary>
    /// The unique identifier of the Contentstack organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    public required ScimGroup Body { get; init; }
}
