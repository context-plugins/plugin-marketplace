using UiPath.Models;

namespace UiPath.Requests.Users;

/// <summary>
/// The inputs of the CreateUser operation.
/// </summary>
public sealed record CreateUserOperationRequest
{
    /// <summary>
    /// The name of the UiPath organization
    /// </summary>
    public required string OrganizationName { get; init; }

    public required CreateUserRequest Body { get; init; }
}
