using Hightouch.Models.Enums;

namespace Hightouch.Requests.DecisionEngine;

/// <summary>
/// The inputs of the ListFlows operation.
/// </summary>
public sealed record ListFlowsRequest
{
    /// <summary>
    /// optional filter by flow name
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// max results (default 100)
    /// </summary>
    public double Limit { get; init; } = 100d;

    /// <summary>
    /// pagination offset
    /// </summary>
    public double Offset { get; init; } = 0d;

    /// <summary>
    /// sort field
    /// </summary>
    public OrderBy OrderBy { get; init; } = OrderBy.Id;
}
