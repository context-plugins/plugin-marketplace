namespace Soda.Requests.Contracts;

/// <summary>
/// The inputs of the GetApiV1ContractsActionsCreateSkeletonOperationId operation.
/// </summary>
public sealed record GetApiV1ContractsActionsCreateSkeletonOperationIdRequest
{
    public required string OperationId { get; init; }
}
