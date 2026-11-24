using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Requests.FindAll;

/// <summary>
/// The inputs of the GetFindallEventsV1BetaFindallRunsFindallIdEventsGet operation.
/// </summary>
public sealed record GetFindallEventsV1BetaFindallRunsFindallIdEventsGetRequest
{
    public required string FindallId { get; init; }

    public LastEventId1? LastEventId { get; init; }

    public TimeoutModel? Timeout { get; init; }

    public ParallelBeta1? ParallelBeta { get; init; }
}
