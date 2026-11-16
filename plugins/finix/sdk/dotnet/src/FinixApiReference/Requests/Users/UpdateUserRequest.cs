using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.Users;

/// <summary>
/// The inputs of the UpdateUser operation.
/// </summary>
public sealed record UpdateUserRequest
{
    /// <summary>
    /// ID of <c>User</c> object.
    /// </summary>
    public required string UserId { get; init; }

    public required UsersRequest Body { get; init; }
}
