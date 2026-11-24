namespace DoiT.Requests.Allocations;

/// <summary>
/// The inputs of the DeleteAllocation operation.
/// </summary>
public sealed record DeleteAllocationRequest
{
    /// <summary>
    /// Allocation ID
    /// </summary>
    public required string Id { get; init; }
}
