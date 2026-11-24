namespace Airtable.Requests.Users;

/// <summary>
/// The inputs of the DeleteScimUser operation.
/// </summary>
public sealed record DeleteScimUserRequest
{
    /// <summary>
    /// The unique identifier of the SCIM user resource.
    /// </summary>
    public required string UserId { get; init; }
}
