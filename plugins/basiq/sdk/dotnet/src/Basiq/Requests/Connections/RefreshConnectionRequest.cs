namespace Basiq.Requests.Connections;

/// <summary>
/// The inputs of the RefreshConnection operation.
/// </summary>
public sealed record RefreshConnectionRequest
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
