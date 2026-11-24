namespace FlowAccount.Requests.BatchImport;

/// <summary>
/// The inputs of the BatchImportGetOrgingalFile operation.
/// </summary>
public sealed record BatchImportGetOrgingalFileRequest
{
    public required string? BatchId { get; init; }

    public required string Culture { get; init; }
}
