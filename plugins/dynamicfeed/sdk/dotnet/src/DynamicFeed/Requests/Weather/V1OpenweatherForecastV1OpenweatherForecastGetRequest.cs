using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Weather;

/// <summary>
/// The inputs of the V1OpenweatherForecastV1OpenweatherForecastGet operation.
/// </summary>
public sealed record V1OpenweatherForecastV1OpenweatherForecastGetRequest
{
    public City1? City { get; init; }

    public Lat1? Lat { get; init; }

    public Lon1? Lon { get; init; }

    [Minimum(1)]
    [Maximum(16)]
    public int Days { get; init; } = 5;
}
