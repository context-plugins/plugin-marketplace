using DoiT.Models;

namespace DoiT.Requests.Connections;

/// <summary>
/// The inputs of the UpdateCloudflowConnection operation.
/// </summary>
public sealed record UpdateCloudflowConnectionRequest
{
    public required string ConnectionId { get; init; }

    public required CloudflowV1ConnectionsRequest1 Body { get; init; }
}
