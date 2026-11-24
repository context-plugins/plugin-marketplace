using Bitly.Models;

namespace Bitly.Requests.UserApi;

/// <summary>
/// The inputs of the UpdateUser operation.
/// </summary>
public sealed record UpdateUserRequest
{
    public required UserUpdate Body { get; init; }
}
