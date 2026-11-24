using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.Order;

/// <summary>
/// The inputs of the GetOrderStatus operation.
/// </summary>
public sealed record GetOrderStatusRequest
{
    /// <summary>
    /// The order reference ID for which the order details is required
    /// </summary>
    [RegularExpression("^[-a-zA-Z0-9]+")]
    public string? OrderId { get; init; }
}
