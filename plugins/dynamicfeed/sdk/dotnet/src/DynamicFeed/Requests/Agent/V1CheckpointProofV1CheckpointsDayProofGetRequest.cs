namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1CheckpointProofV1CheckpointsDayProofGet operation.
/// </summary>
public sealed record V1CheckpointProofV1CheckpointsDayProofGetRequest
{
    public required string Day { get; init; }

    public string Kind { get; init; } = "ots";
}
