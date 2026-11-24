using Paid.Models;

namespace Paid.Requests.Orders;

/// <summary>
/// The inputs of the BatchOrderSeatAssignments operation.
/// </summary>
public sealed record BatchOrderSeatAssignmentsRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public BatchSeatAssignmentsRequest? Body { get; init; }
}
