namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1AttestV1AttestGet operation.
/// </summary>
public sealed record V1AttestV1AttestGetRequest
{
    public required string Metric { get; init; }

    public required double Threshold { get; init; }

    public string Op { get; init; } = "gte";

    public double? Lat { get; init; }

    public double? Lon { get; init; }

    public string? City { get; init; }
}
