namespace FlowAccount.Requests.BatchImport;

/// <summary>
/// The inputs of the BatchImportGetCustomTemplate operation.
/// </summary>
public sealed record BatchImportGetCustomTemplateRequest
{
    public required string? TemplateId { get; init; }

    public required string Culture { get; init; }
}
