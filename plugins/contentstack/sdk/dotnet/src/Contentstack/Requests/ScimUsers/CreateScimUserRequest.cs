using Contentstack.Models;

namespace Contentstack.Requests.ScimUsers;

/// <summary>
/// The inputs of the CreateScimUser operation.
/// </summary>
public sealed record CreateScimUserRequest
{
    /// <summary>
    /// The unique identifier of the Contentstack organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    public required ScimUser Body { get; init; }
}
