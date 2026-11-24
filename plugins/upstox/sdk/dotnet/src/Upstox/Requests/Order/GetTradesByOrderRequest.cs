using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.Order;

/// <summary>
/// The inputs of the GetTradesByOrder operation.
/// </summary>
public sealed record GetTradesByOrderRequest
{
    /// <summary>
    /// The order ID for which the order to get order trades
    /// </summary>
    [MinLength(1)]
    [RegularExpression("^[-a-zA-Z0-9]+")]
    public required string OrderId { get; init; }
}
