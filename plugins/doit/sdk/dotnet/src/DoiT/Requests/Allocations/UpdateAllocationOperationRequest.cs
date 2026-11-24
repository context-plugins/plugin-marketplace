using DoiT.Models;

namespace DoiT.Requests.Allocations;

/// <summary>
/// The inputs of the UpdateAllocation operation.
/// </summary>
public sealed record UpdateAllocationOperationRequest
{
    /// <summary>
    /// Allocation ID
    /// </summary>
    public required string Id { get; init; }

    public UpdateAllocationRequest? Body { get; init; }
}
