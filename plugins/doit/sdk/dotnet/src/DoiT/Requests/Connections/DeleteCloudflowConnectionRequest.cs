namespace DoiT.Requests.Connections;

/// <summary>
/// The inputs of the DeleteCloudflowConnection operation.
/// </summary>
public sealed record DeleteCloudflowConnectionRequest
{
    public required string ConnectionId { get; init; }
}
