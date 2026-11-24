namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1IntensityV1IntensityGet operation.
/// </summary>
public sealed record V1IntensityV1IntensityGetRequest
{
    public required double Lat { get; init; }

    public required double Lon { get; init; }

    public string Peril { get; init; } = "flood";

    public string? Metric { get; init; }
}
