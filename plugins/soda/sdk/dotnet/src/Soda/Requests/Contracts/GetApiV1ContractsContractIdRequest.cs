namespace Soda.Requests.Contracts;

/// <summary>
/// The inputs of the GetApiV1ContractsContractId operation.
/// </summary>
public sealed record GetApiV1ContractsContractIdRequest
{
    public required string ContractId { get; init; }
}
