using Hightouch.Models.Enums;

namespace Hightouch.Requests.Sources;

/// <summary>
/// The inputs of the ListSource operation.
/// </summary>
public sealed record ListSourceRequest
{
    /// <summary>
    /// filter based on name
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// filter based on slug
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
    /// specify the order
    /// </summary>
    public OrderByHightouchDestinationsApi OrderBy { get; init; } = OrderByHightouchDestinationsApi.Id;
}
