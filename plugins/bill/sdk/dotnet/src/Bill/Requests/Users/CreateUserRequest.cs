using Bill.Models;

namespace Bill.Requests.Users;

/// <summary>
/// The inputs of the CreateUser operation.
/// </summary>
public sealed record CreateUserRequest
{
    public string? ApiToken { get; init; }

    public required CreateUserRequestDto Body { get; init; }
}
