namespace FlowAccount.Requests.BatchImport;

/// <summary>
/// The inputs of the BatchImportGetBatchS3Data operation.
/// </summary>
public sealed record BatchImportGetBatchS3DataRequest
{
    public required string? BatchId { get; init; }

    public required string Culture { get; init; }
}
