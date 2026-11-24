namespace Fillo.Requests.Deliveries;

/// <summary>
/// The inputs of the GetFormDeliveries operation.
/// </summary>
public sealed record GetFormDeliveriesRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }
}
