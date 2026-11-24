using Hightouch.Models.Enums;

namespace Hightouch.Requests.Destinations;

/// <summary>
/// The inputs of the ListDestination operation.
/// </summary>
public sealed record ListDestinationRequest
{
    /// <summary>
    /// Filter based on the destination's name
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// Filter based on destination's slug
    /// </summary>
    public string? Slug { get; init; }

    /// <summary>
    /// set the offset on results (for pagination)
    /// </summary>
    public double Offset { get; init; } = 0d;

    /// <summary>
    /// limit the number of objects returned (default is 100)
    /// </summary>
    public double Limit { get; init; } = 100d;

    /// <summary>
    /// Order the returned destinations
    /// </summary>
    public OrderByHightouchDestinationsApi OrderBy { get; init; } = OrderByHightouchDestinationsApi.Id;
}
