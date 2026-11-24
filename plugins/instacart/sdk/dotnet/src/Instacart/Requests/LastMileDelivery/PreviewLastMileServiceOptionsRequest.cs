using Instacart.Models;

namespace Instacart.Requests.LastMileDelivery;

/// <summary>
/// The inputs of the PreviewLastMileServiceOptions operation.
/// </summary>
public sealed record PreviewLastMileServiceOptionsRequest
{
    /// <summary>
    /// The unique identifier for the user in the retailer's system.
    /// </summary>
    public required string UserId { get; init; }

    public required PreviewServiceOptionsRequest Body { get; init; }
}
