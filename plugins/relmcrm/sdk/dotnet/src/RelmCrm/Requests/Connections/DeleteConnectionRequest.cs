namespace RelmCrm.Requests.Connections;

/// <summary>
/// The inputs of the DeleteConnection operation.
/// </summary>
public sealed record DeleteConnectionRequest
{
    public required string Id { get; init; }
}
