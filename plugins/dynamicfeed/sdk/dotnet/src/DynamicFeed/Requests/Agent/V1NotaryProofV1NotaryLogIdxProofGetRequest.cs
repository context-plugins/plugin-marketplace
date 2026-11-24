namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1NotaryProofV1NotaryLogIdxProofGet operation.
/// </summary>
public sealed record V1NotaryProofV1NotaryLogIdxProofGetRequest
{
    public required int Idx { get; init; }
}
