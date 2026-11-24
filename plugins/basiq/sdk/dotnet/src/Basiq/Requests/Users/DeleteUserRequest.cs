namespace Basiq.Requests.Users;

/// <summary>
/// The inputs of the DeleteUser operation.
/// </summary>
public sealed record DeleteUserRequest
{
    /// <summary>
    /// User identification.
    /// </summary>
    public required string UserId { get; init; }
}
