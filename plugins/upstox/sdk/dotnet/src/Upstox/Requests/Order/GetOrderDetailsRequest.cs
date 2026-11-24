using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.Order;

/// <summary>
/// The inputs of the GetOrderDetails operation.
/// </summary>
public sealed record GetOrderDetailsRequest
{
    /// <summary>
    /// The order reference ID for which the order history is required
    /// </summary>
    [RegularExpression("^[-a-zA-Z0-9]+")]
    public string? OrderId { get; init; }

    /// <summary>
    /// The unique tag of the order for which the order history is being requested
    /// </summary>
    public string? Tag { get; init; }
}
