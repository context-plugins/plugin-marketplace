using Paid.Models.Enums;

namespace Paid.Requests.Orders;

/// <summary>
/// The inputs of the ListOrderSeats operation.
/// </summary>
public sealed record ListOrderSeatsRequest
{
    public required string Id { get; init; }

    public int Limit { get; init; } = 10;

    public int? Offset { get; init; }

    public string? ProductExternalId { get; init; }

    public OrdersIdSeatsGetParametersStatus? Status { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
