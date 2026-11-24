using DoiT.Models;

namespace DoiT.Requests.Contracts;

/// <summary>
/// The inputs of the CancelContract operation.
/// </summary>
public sealed record CancelContractRequest
{
    public required string CustomerId { get; init; }

    public required string ContractId { get; init; }

    public CustomersContractsCancelRequest? Body { get; init; }
}
