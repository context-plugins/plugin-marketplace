using Hightouch.Models.Enums;

namespace Hightouch.Requests.Events;

/// <summary>
/// The inputs of the ListDomains operation.
/// </summary>
public sealed record ListDomainsRequest
{
    public string? Name { get; init; }

    /// <summary>
    /// filter to domains (and components) for this event source slug
    /// </summary>
    public string? Source { get; init; }

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
    public OrderByHightouchEventsApi OrderBy { get; init; } = OrderByHightouchEventsApi.Id;
}
