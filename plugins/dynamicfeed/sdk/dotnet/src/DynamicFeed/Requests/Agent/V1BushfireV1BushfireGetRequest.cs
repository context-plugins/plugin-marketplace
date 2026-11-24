namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1BushfireV1BushfireGet operation.
/// </summary>
public sealed record V1BushfireV1BushfireGetRequest
{
    public double? Lat { get; init; }

    public double? Lon { get; init; }

    public double RadiusKm { get; init; } = 150d;

    public string State { get; init; } = "";

    public int Limit { get; init; } = 20;
}
