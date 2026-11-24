namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1SnapshotV1SnapshotGet operation.
/// </summary>
public sealed record V1SnapshotV1SnapshotGetRequest
{
    public string Date { get; init; } = "";
}
