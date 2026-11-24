namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1NearbyV1NearbyGet operation.
/// </summary>
public sealed record V1NearbyV1NearbyGetRequest
{
    public required double Lat { get; init; }

    public required double Lon { get; init; }

    public double RadiusKm { get; init; } = 500d;
}
