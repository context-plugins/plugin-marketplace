namespace FlowAccount.Requests.BatchImport;

/// <summary>
/// The inputs of the BatchImportGenerateBacthIdMetadata operation.
/// </summary>
public sealed record BatchImportGenerateBacthIdMetadataRequest
{
    public required string Culture { get; init; }

    public string? FileName { get; init; }
}
