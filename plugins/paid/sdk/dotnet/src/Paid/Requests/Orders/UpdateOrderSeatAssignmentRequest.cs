using Paid.Models;

namespace Paid.Requests.Orders;

/// <summary>
/// The inputs of the UpdateOrderSeatAssignment operation.
/// </summary>
public sealed record UpdateOrderSeatAssignmentRequest
{
    public required string Id { get; init; }

    public required string SeatId { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public UpdateSeatAssignmentRequest? Body { get; init; }
}
