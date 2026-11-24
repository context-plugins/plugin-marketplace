using Airtable.Models;

namespace Airtable.Requests.Users;

/// <summary>
/// The inputs of the UpdateScimUser operation.
/// </summary>
public sealed record UpdateScimUserRequest
{
    /// <summary>
    /// The unique identifier of the SCIM user resource.
    /// </summary>
    public required string UserId { get; init; }

    public required ScimPatchRequest Body { get; init; }
}
