namespace DynamicFeed.Requests.History;

/// <summary>
/// The inputs of the HistoryV1HistoryGet operation.
/// </summary>
public sealed record HistoryV1HistoryGetRequest
{
    public string? Tool { get; init; }
}
