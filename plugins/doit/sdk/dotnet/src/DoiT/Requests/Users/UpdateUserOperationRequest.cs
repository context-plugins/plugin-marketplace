using DoiT.Models;

namespace DoiT.Requests.Users;

/// <summary>
/// The inputs of the UpdateUser operation.
/// </summary>
public sealed record UpdateUserOperationRequest
{
    /// <summary>
    /// The unique ID of the user to update.
    /// </summary>
    public required string Id { get; init; }

    public required UpdateUserRequest Body { get; init; }
}
