using DoiT.Models;

namespace DoiT.Requests.Contracts;

/// <summary>
/// The inputs of the UpdateContract operation.
/// </summary>
public sealed record UpdateContractRequest
{
    public required string CustomerId { get; init; }

    public required string ContractId { get; init; }

    public required MtsContractInput Body { get; init; }
}
