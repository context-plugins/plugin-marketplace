using FlowAccount.Models.Enums;

namespace FlowAccount.Requests.BatchImport;

/// <summary>
/// The inputs of the BatchImportQueryBatch operation.
/// </summary>
public sealed record BatchImportQueryBatchRequest
{
    public required string Culture { get; init; }

    public BatchImportStatus? Status { get; init; }

    public required string Body { get; init; }
}
