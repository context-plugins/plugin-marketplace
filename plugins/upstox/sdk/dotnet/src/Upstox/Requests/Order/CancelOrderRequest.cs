using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.Order;

/// <summary>
/// The inputs of the CancelOrder operation.
/// </summary>
public sealed record CancelOrderRequest
{
    [MinLength(1)]
    [RegularExpression("^[-a-zA-Z0-9]+")]
    public required string OrderId { get; init; }
}
