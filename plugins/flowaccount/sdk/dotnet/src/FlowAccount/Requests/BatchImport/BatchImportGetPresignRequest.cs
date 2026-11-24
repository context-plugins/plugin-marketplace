using FlowAccount.Models;

namespace FlowAccount.Requests.BatchImport;

/// <summary>
/// The inputs of the BatchImportGetPresign operation.
/// </summary>
public sealed record BatchImportGetPresignRequest
{
    public required string Culture { get; init; }

    public long? Id { get; init; }

    public required BatchImportPayload Body { get; init; }
}
