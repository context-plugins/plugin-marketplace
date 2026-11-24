namespace PlinthUsGrantsData.Requests.Pulse;

/// <summary>
/// The inputs of the ListPulseRuns operation.
/// </summary>
public sealed record ListPulseRunsRequest
{
    public required string SubId { get; init; }
}
