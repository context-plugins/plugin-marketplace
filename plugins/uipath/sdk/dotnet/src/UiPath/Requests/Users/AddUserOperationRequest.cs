using UiPath.Models;

namespace UiPath.Requests.Users;

/// <summary>
/// The inputs of the AddUser operation.
/// </summary>
public sealed record AddUserOperationRequest
{
    public required AddUserRequest Body { get; init; }
}
