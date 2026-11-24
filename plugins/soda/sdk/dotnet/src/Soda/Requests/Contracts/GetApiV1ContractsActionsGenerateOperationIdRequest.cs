namespace Soda.Requests.Contracts;

/// <summary>
/// The inputs of the GetApiV1ContractsActionsGenerateOperationId operation.
/// </summary>
public sealed record GetApiV1ContractsActionsGenerateOperationIdRequest
{
    public required string OperationId { get; init; }
}
