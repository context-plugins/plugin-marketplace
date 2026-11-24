using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.Order;

/// <summary>
/// The inputs of the GetGttOrderDetails operation.
/// </summary>
public sealed record GetGttOrderDetailsRequest
{
    /// <summary>
    /// Unique identifier of the GTT order for which the order history is required
    /// </summary>
    [RegularExpression("^GTT-.+$")]
    public string? GttOrderId { get; init; }
}
