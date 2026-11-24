using UiPath.Models;

namespace UiPath.Requests.Users;

/// <summary>
/// The inputs of the EditUser operation.
/// </summary>
public sealed record EditUserOperationRequest
{
    public required EditUserRequest Body { get; init; }
}
