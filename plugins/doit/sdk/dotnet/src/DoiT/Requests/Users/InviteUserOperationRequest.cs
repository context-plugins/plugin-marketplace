using DoiT.Models;

namespace DoiT.Requests.Users;

/// <summary>
/// The inputs of the InviteUser operation.
/// </summary>
public sealed record InviteUserOperationRequest
{
    public required InviteUserRequest Body { get; init; }
}
