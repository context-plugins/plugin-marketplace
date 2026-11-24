using Fillo.Models;

namespace Fillo.Requests.Deliveries;

/// <summary>
/// The inputs of the RetryFormDeliveries operation.
/// </summary>
public sealed record RetryFormDeliveriesRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    public required ApiV1ManageFormsDeliveriesRetryRequest Body { get; init; }
}
