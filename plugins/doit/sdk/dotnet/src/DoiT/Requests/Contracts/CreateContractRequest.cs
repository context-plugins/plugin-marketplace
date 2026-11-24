using DoiT.Models;

namespace DoiT.Requests.Contracts;

/// <summary>
/// The inputs of the CreateContract operation.
/// </summary>
public sealed record CreateContractRequest
{
    /// <summary>
    /// The customer (tenant) the contract is created for.
    /// </summary>
    public required string CustomerId { get; init; }

    public required MtsContractCreateInput Body { get; init; }
}
