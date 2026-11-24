using Contentstack.Models;

namespace Contentstack.Requests.ScimUsers;

/// <summary>
/// The inputs of the UpdateScimUser operation.
/// </summary>
public sealed record UpdateScimUserRequest
{
    /// <summary>
    /// The unique identifier of the Contentstack organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    /// <summary>
    /// The SCIM user ID of the user within the organization.
    /// </summary>
    public required string UserId { get; init; }

    public required ScimPatchRequest Body { get; init; }
}
