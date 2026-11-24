using AmazonForecast.Models.Enums;

namespace AmazonForecast.Requests.Tags;

/// <summary>
/// The inputs of the TagResource2 operation.
/// </summary>
public sealed record TagResource2Request
{
    public required XAmzTarget1AmazonForecastServiceResourceApi XAmzTarget { get; init; }
}
