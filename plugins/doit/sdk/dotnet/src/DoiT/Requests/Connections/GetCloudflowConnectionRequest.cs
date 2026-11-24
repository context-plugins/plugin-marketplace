namespace DoiT.Requests.Connections;

/// <summary>
/// The inputs of the GetCloudflowConnection operation.
/// </summary>
public sealed record GetCloudflowConnectionRequest
{
    public required string ConnectionId { get; init; }
}
