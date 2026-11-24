namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1CheckpointsV1CheckpointsGet operation.
/// </summary>
public sealed record V1CheckpointsV1CheckpointsGetRequest
{
    public int Limit { get; init; } = 30;
}
