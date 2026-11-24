namespace Clix.Requests;

/// <summary>
/// The inputs of the ClixExternalServiceDeleteUser operation.
/// </summary>
public sealed record ClixExternalServiceDeleteUserRequest
{
    /// <summary>
    /// The unique identifier of the user to delete
    /// </summary>
    public required string ProjectUserId { get; init; }
}
