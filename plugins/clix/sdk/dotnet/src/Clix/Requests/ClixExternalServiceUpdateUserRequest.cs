using Clix.Models;

namespace Clix.Requests;

/// <summary>
/// The inputs of the ClixExternalServiceUpdateUser operation.
/// </summary>
public sealed record ClixExternalServiceUpdateUserRequest
{
    /// <summary>
    /// The unique identifier of the user to update
    /// </summary>
    public required string ProjectUserId { get; init; }

    /// <summary>
    /// User data to update
    /// </summary>
    public required V1UpdateUserRequest Body { get; init; }
}
