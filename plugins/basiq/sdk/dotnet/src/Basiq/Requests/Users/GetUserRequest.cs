namespace Basiq.Requests.Users;

/// <summary>
/// The inputs of the GetUser operation.
/// </summary>
public sealed record GetUserRequest
{
    /// <summary>
    /// The identifier of the user to be retrieved.
    /// </summary>
    public required string UserId { get; init; }
}
