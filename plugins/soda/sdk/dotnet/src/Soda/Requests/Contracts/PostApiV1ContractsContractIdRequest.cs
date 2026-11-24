using Soda.Models;

namespace Soda.Requests.Contracts;

/// <summary>
/// The inputs of the PostApiV1ContractsContractId operation.
/// </summary>
public sealed record PostApiV1ContractsContractIdRequest
{
    public required string ContractId { get; init; }

    public required PublicApiPublishContractRequestDto Body { get; init; }
}
