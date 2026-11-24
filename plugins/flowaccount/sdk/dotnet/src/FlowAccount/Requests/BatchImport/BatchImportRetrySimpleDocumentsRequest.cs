using FlowAccount.Models;

namespace FlowAccount.Requests.BatchImport;

/// <summary>
/// The inputs of the BatchImportRetrySimpleDocuments operation.
/// </summary>
public sealed record BatchImportRetrySimpleDocumentsRequest
{
    public required string Culture { get; init; }

    public required BatchImportRetry Body { get; init; }
}
