namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1WitnessInclusionV1WitnessIdxInclusionGet operation.
/// </summary>
public sealed record V1WitnessInclusionV1WitnessIdxInclusionGetRequest
{
    public required int Idx { get; init; }
}
