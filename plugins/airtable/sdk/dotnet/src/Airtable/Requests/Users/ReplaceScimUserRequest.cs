using Airtable.Models;

namespace Airtable.Requests.Users;

/// <summary>
/// The inputs of the ReplaceScimUser operation.
/// </summary>
public sealed record ReplaceScimUserRequest
{
    /// <summary>
    /// The unique identifier of the SCIM user resource.
    /// </summary>
    public required string UserId { get; init; }

    public required ScimUserCreateRequest Body { get; init; }
}
