namespace DoiT.Requests.Contracts;

/// <summary>
/// The inputs of the ActivateContract operation.
/// </summary>
public sealed record ActivateContractRequest
{
    public required string CustomerId { get; init; }

    public required string ContractId { get; init; }
}
