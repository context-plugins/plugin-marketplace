using Instacart.Models;

namespace Instacart.Requests.Replacements;

/// <summary>
/// The inputs of the UpdateItemReplacement operation.
/// </summary>
public sealed record UpdateItemReplacementRequest
{
    /// <summary>
    /// The unique identifier for the order.
    /// </summary>
    public required string OrderId { get; init; }

    /// <summary>
    /// The unique identifier for a specific item within the order.
    /// </summary>
    public required string OrderItemId { get; init; }

    public required ReplacementDecisionRequest Body { get; init; }
}
