using Soda.Models;

namespace Soda.Requests.Contracts;

/// <summary>
/// The inputs of the PostApiV1Contracts operation.
/// </summary>
public sealed record PostApiV1ContractsRequest
{
    public required PublicApiCreateContractRequestDto Body { get; init; }
}
