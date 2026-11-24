namespace Basiq.Requests.Connections;

/// <summary>
/// The inputs of the RefreshConnections operation.
/// </summary>
public sealed record RefreshConnectionsRequest
{
    /// <summary>
    /// The identifier of the user.
    /// </summary>
    public required string UserId { get; init; }
}
