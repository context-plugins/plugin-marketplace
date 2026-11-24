namespace Airtable.Requests.Users;

/// <summary>
/// The inputs of the GetScimUser operation.
/// </summary>
public sealed record GetScimUserRequest
{
    /// <summary>
    /// The unique identifier of the SCIM user resource.
    /// </summary>
    public required string UserId { get; init; }
}
