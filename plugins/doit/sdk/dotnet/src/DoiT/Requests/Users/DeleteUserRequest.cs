namespace DoiT.Requests.Users;

/// <summary>
/// The inputs of the DeleteUser operation.
/// </summary>
public sealed record DeleteUserRequest
{
    /// <summary>
    /// The unique ID of the user to delete
    /// </summary>
    public required string Id { get; init; }
}
