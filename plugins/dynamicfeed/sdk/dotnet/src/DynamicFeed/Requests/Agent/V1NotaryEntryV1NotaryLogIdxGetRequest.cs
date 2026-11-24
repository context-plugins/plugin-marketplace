namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1NotaryEntryV1NotaryLogIdxGet operation.
/// </summary>
public sealed record V1NotaryEntryV1NotaryLogIdxGetRequest
{
    public required int Idx { get; init; }
}
