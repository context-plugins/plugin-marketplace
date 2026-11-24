namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1ProToolDiscoverV1ProToolToolGet operation.
/// </summary>
public sealed record V1ProToolDiscoverV1ProToolToolGetRequest
{
    public required string Tool { get; init; }
}
