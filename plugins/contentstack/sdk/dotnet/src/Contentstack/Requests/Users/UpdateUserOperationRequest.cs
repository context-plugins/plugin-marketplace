using Contentstack.Models;

namespace Contentstack.Requests.Users;

/// <summary>
/// The inputs of the UpdateUser operation.
/// </summary>
public sealed record UpdateUserOperationRequest
{
    public required UpdateUserRequest Body { get; init; }
}
