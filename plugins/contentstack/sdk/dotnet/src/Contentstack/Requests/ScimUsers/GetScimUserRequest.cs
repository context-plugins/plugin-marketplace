namespace Contentstack.Requests.ScimUsers;

/// <summary>
/// The inputs of the GetScimUser operation.
/// </summary>
public sealed record GetScimUserRequest
{
    /// <summary>
    /// The unique identifier of the Contentstack organization.
    /// </summary>
    public required string OrganizationUid { get; init; }

    /// <summary>
    /// The SCIM user ID of the user within the organization.
    /// </summary>
    public required string UserId { get; init; }
}
