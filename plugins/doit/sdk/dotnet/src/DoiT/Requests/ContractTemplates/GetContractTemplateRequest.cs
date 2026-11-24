namespace DoiT.Requests.ContractTemplates;

/// <summary>
/// The inputs of the GetContractTemplate operation.
/// </summary>
public sealed record GetContractTemplateRequest
{
    public required string TemplateId { get; init; }
}
