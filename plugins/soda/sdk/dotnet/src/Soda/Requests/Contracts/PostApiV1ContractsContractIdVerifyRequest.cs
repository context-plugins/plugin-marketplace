using Soda.Models;

namespace Soda.Requests.Contracts;

/// <summary>
/// The inputs of the PostApiV1ContractsContractIdVerify operation.
/// </summary>
public sealed record PostApiV1ContractsContractIdVerifyRequest
{
    public required string ContractId { get; init; }

    public required PublicApiVerifyContractRequestDto Body { get; init; }
}
