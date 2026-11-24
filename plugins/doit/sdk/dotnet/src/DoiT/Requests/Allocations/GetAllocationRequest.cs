namespace DoiT.Requests.Allocations;

/// <summary>
/// The inputs of the GetAllocation operation.
/// </summary>
public sealed record GetAllocationRequest
{
    /// <summary>
    /// Allocation ID
    /// </summary>
    public required string Id { get; init; }
}
