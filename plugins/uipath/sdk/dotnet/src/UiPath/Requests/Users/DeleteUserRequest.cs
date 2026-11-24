namespace UiPath.Requests.Users;

/// <summary>
/// The inputs of the DeleteUser operation.
/// </summary>
public sealed record DeleteUserRequest
{
    /// <summary>
    /// The name of the UiPath organization
    /// </summary>
    public required string OrganizationName { get; init; }

    /// <summary>
    /// Unique identifier of the user
    /// </summary>
    public required string UserId { get; init; }
}
