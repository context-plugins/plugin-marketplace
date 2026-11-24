using Contentstack.Models;

namespace Contentstack.Requests.UserSessions;

/// <summary>
/// The inputs of the LoginUser operation.
/// </summary>
public sealed record LoginUserRequest
{
    public required LoginRequest Body { get; init; }
}
