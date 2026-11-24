using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Weather;

/// <summary>
/// The inputs of the V1OpenweatherCurrentV1OpenweatherCurrentGet operation.
/// </summary>
public sealed record V1OpenweatherCurrentV1OpenweatherCurrentGetRequest
{
    public City1? City { get; init; }

    public Lat1? Lat { get; init; }

    public Lon1? Lon { get; init; }
}
