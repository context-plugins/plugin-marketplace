using Soda.Models;

namespace Soda.Requests.Contracts;

/// <summary>
/// The inputs of the PostApiV1ContractsActionsGenerate operation.
/// </summary>
public sealed record PostApiV1ContractsActionsGenerateRequest
{
    public required PublicApiGenerateContractRequestDto Body { get; init; }
}
