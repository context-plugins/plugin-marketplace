using Clix.Models;

namespace Clix.Requests;

/// <summary>
/// The inputs of the ClixExternalServiceCreateUser operation.
/// </summary>
public sealed record ClixExternalServiceCreateUserRequest
{
    /// <summary>
    /// User data to create
    /// </summary>
    public required V1CreateUserRequest Body { get; init; }
}
