namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1StationGetV1StationStationIdGet operation.
/// </summary>
public sealed record V1StationGetV1StationStationIdGetRequest
{
    public required string StationId { get; init; }
}
