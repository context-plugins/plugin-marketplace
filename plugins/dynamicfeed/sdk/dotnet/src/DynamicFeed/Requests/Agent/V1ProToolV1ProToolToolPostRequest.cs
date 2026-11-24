namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1ProToolV1ProToolToolPost operation.
/// </summary>
public sealed record V1ProToolV1ProToolToolPostRequest
{
    public required string Tool { get; init; }
}
