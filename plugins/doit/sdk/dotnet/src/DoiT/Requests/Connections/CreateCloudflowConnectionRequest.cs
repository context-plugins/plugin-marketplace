using DoiT.Models;

namespace DoiT.Requests.Connections;

/// <summary>
/// The inputs of the CreateCloudflowConnection operation.
/// </summary>
public sealed record CreateCloudflowConnectionRequest
{
    public required CloudflowV1ConnectionsRequest Body { get; init; }
}
