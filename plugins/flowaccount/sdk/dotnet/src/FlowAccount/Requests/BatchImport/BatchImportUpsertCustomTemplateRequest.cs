using FlowAccount.Models;

namespace FlowAccount.Requests.BatchImport;

/// <summary>
/// The inputs of the BatchImportUpsertCustomTemplate operation.
/// </summary>
public sealed record BatchImportUpsertCustomTemplateRequest
{
    public required string Culture { get; init; }

    public required CustomTemplate Body { get; init; }
}
