namespace DoiT.Requests.ContractTemplates;

/// <summary>
/// The inputs of the ArchiveContractTemplate operation.
/// </summary>
public sealed record ArchiveContractTemplateRequest
{
    public required string TemplateId { get; init; }
}
