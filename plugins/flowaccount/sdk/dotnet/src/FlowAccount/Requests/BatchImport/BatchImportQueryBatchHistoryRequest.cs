namespace FlowAccount.Requests.BatchImport;

/// <summary>
/// The inputs of the BatchImportQueryBatchHistory operation.
/// </summary>
public sealed record BatchImportQueryBatchHistoryRequest
{
    public required string Culture { get; init; }
}
