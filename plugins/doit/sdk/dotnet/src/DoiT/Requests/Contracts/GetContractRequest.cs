namespace DoiT.Requests.Contracts;

/// <summary>
/// The inputs of the GetContract operation.
/// </summary>
public sealed record GetContractRequest
{
    public required string CustomerId { get; init; }

    public required string ContractId { get; init; }
}
