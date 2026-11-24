namespace Basiq.Requests.Connections;

/// <summary>
/// The inputs of the GetConnection operation.
/// </summary>
public sealed record GetConnectionRequest
{
    /// <summary>
    /// The identifier of the user.
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// The identifier of the connection.
    /// </summary>
    public required string ConnectionId { get; init; }
}
