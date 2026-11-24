using RelmCrm.Models;

namespace RelmCrm.Requests.Connections;

/// <summary>
/// The inputs of the CreateConnection operation.
/// </summary>
public sealed record CreateConnectionRequest
{
    public required ConnectionsRequest Body { get; init; }
}
