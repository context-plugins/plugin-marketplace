using Hightouch.Models.Enums;

namespace Hightouch.Requests.SyncTemplates;

/// <summary>
/// The inputs of the ListSyncTemplates operation.
/// </summary>
public sealed record ListSyncTemplatesRequest
{
    /// <summary>
    /// filter based on name
    /// </summary>
    public string? Name { get; init; }

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
