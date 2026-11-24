using DoiT.Models;

namespace DoiT.Requests.Allocations;

/// <summary>
/// The inputs of the CreateAllocation operation.
/// </summary>
public sealed record CreateAllocationOperationRequest
{
    public CreateAllocationRequest? Body { get; init; }
}
