using Basiq.Models;

namespace Basiq.Requests.Users;

/// <summary>
/// The inputs of the CreateUser operation.
/// </summary>
public sealed record CreateUserRequest
{
    public required UsersRequest Body { get; init; }
}
