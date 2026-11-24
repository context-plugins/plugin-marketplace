using Soda.Models;

namespace Soda.Requests.Contracts;

/// <summary>
/// The inputs of the PostApiV1ContractsActionsCreateSkeleton operation.
/// </summary>
public sealed record PostApiV1ContractsActionsCreateSkeletonRequest
{
    public required PublicApiCreateSkeletonContractRequestDto Body { get; init; }
}
