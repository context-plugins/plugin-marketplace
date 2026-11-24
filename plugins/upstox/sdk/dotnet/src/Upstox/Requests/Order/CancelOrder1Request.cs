using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.Order;

/// <summary>
/// The inputs of the CancelOrder1 operation.
/// </summary>
public sealed record CancelOrder1Request
{
    /// <summary>
    /// The order ID for which the order must be cancelled
    /// </summary>
    [MinLength(1)]
    [RegularExpression("^[-a-zA-Z0-9]+")]
    public required string OrderId { get; init; }
}
