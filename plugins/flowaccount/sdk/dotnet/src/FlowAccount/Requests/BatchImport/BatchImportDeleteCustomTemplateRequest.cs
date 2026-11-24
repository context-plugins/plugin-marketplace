namespace FlowAccount.Requests.BatchImport;

/// <summary>
/// The inputs of the BatchImportDeleteCustomTemplate operation.
/// </summary>
public sealed record BatchImportDeleteCustomTemplateRequest
{
    public required string? TemplateId { get; init; }

    public required string Culture { get; init; }
}
