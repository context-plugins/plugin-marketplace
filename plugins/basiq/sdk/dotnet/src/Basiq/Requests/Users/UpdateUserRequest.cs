using Basiq.Models;

namespace Basiq.Requests.Users;

/// <summary>
/// The inputs of the UpdateUser operation.
/// </summary>
public sealed record UpdateUserRequest
{
    /// <summary>
    /// The identifier of the user to be retrieved.
    /// </summary>
    public required string UserId { get; init; }

    public required UsersRequest1 Body { get; init; }
}
