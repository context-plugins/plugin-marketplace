namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the GetApiV1DatasourcesActionsTestConnectionOperationId operation.
/// </summary>
public sealed record GetApiV1DatasourcesActionsTestConnectionOperationIdRequest
{
    public required string OperationId { get; init; }
}
